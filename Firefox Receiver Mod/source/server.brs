' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

function setupServer() as object
    this = {
        protocolVersion: 1
        port: createObject("roMessagePort")
        server: createObject("roStreamSocket")
        connections: {}
        listen: server_listen
        makeResponse: server_makeResponse
        processEvents: server_processEvents
        close: server_close
    }

    ' Seup the communications server
    socketAddr = createObject("roSocketAddress")
    socketAddr.setPort(9191)
    this.server.setMessagePort(this.port)
    this.server.setAddress(socketAddr)
    this.server.notifyReadable(true)
    this.server.listen(4)
    if not this.server.eOK()
        print "Error creating listen socket"
        stop
    end if

    return this
end function

function server_listen(event as object) as void
end function

function server_makeResponse(status as string) as string
    response = {
        _s: status
        _v: m.protocolVersion
    }
    return toJSON(response)
end function

function server_processEvents() as void
    event = wait(100, m.server.getMessagePort())
    if type(event) = "roSocketEvent" then
        changedID = event.getSocketID()
        if changedID = m.server.getID() and m.server.isReadable() then
            ' New
            newConnection = m.server.accept()
            if newConnection = invalid then
                print "accept failed"
            else
                print "accepted new connection " changedID
                newConnection.notifyReadable(true)
                newConnection.setMessagePort(m.server.getMessagePort())
                m.connections[stri(newConnection.getID())] = newConnection
                newConnection.sendStr(m.makeResponse("connected"))
            end if
        else
            ' Activity on an open connection
            connection = m.connections[stri(changedID)]
            closed = false
            if connection <> invalid and connection.isReadable() then
                received = connection.receiveStr(2048)
                r = CreateObject("roRegex", "GET\s\/socket\.io\/\?EIO=\d&transport=polling&t=\d+-\d+\sHTTP\/1.1$\RHost:\s\d+\.\d+\.\d+\.\d+:9191$\RConnection: keep-alive$\RUser-Agent:.+$\RAccept:.+$\RAccept-Encoding:.+$\RAccept-Language:.+$\R\R", "m")
                print "received is " received
                received = r.replace(received, "")
                if len(received) > 0 then
                    params = parseJSON(received)
                    if params.type = "LOAD" then
                        print "Reading params: "; params.source
                        videoParams = {
                            url: params.source
                            title: params.title
                            poster: params.poster
                        }

                        ' TODO: Only save the video to history if it launched successfully
                        saveToHistory(videoParams)

                        playVideo(m, connection, videoParams)
                        return
                    end if
                    ' If we are unable to send, just drop data for now.
                    ' You could use notifywritable and buffer data.
                else if len(received) = 0 then
                    ' Client closed
                    print "Closed"
                    closed = true
                end if
            end if
            if connection <> invalid and (closed or not connection.eOK()) then
                print "closing connection " changedID
                connection.close()
                m.connections.delete(stri(changedID))
            end if
        end if
    end if
end function

function server_close(context as object) as void
    m.server.close()
    for each id in m.connections
        m.connections[id].close()
    end for
end function
