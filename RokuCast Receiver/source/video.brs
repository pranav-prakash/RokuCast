Function displayVideo(args As Dynamic, isHLS as Dynamic)
    print "Displaying video: "
    p = CreateObject("roMessagePort")
    video = CreateObject("roVideoScreen")
    video.setMessagePort(p)

    bitrates  = [0, 0]      ' 0 = no dots, default bitrate
   
    'Add the srt = "" to avoid a missing assignment error in Roku's code.

    qualities = ["HD", "SD"]
    streamformat = "mp4"
    if (isHLS)
        streamformat = "hls"
    end if
    srt = ""

    videoclip = CreateObject("roAssociativeArray")
    videoclip.StreamBitrates = bitrates
    videoclip.StreamUrls = [args.url, args.url]
    videoclip.StreamQualities = qualities
    videoclip.StreamFormat = streamformat
    videoclip.Title = [args.title]

    ' Explicity declare the Switching Strategy
    videoclip.SwitchingStrategy = "full-adaptation"

    print "srt = ";srt
    if srt <> invalid and srt <> "" then
        videoclip.SubtitleUrl = srt
    end if

    print videoclip
    print videoclip.StreamUrls
    print videoclip.StreamQualities
    print videoclip.StreamBitrates
    print videoclip.StreamFormat
    print videoclip.Title
    
    video.SetContent(videoclip)
    
    ' The following lines of code work around Roku's HTTPS request issues
    video.SetCertificatesFile("common:/certs/ca-bundle.crt")
    video.AddHeader ("User-Agent", "Chrome")
    video.EnableCookies()
    video.SetCertificatesDepth(3)
    video.show()

    lastSavedPos   = 0
    statusInterval = 10 'position must change by more than this number of seconds before saving

    while true
        msg = wait(0, video.GetMessagePort())
        if type(msg) = "roVideoScreenEvent"
            if msg.isScreenClosed() then 'ScreenClosed event
                print "Closing video screen"
                exit while
            else if msg.isPlaybackPosition() then
                nowpos = msg.GetIndex()
                if nowpos > 10000
                    
                end if
                if nowpos > 0
                    if abs(nowpos - lastSavedPos) > statusInterval
                        lastSavedPos = nowpos
                    end if
                end if
            else if msg.isRequestFailed()
                print "request failed - error: "; msg.GetIndex();" - "; msg.GetMessage()
            else
                print "Unknown event: "; msg.GetType(); " msg: "; msg.GetMessage()
            endif
        end if
    end while
End Function
