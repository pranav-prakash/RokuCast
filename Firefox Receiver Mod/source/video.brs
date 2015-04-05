Function displayVideo(args As Dynamic)
    print "Displaying video: "
    p = CreateObject("roMessagePort")
    video = CreateObject("roVideoScreen")
    video.setMessagePort(p)

     bitrates  = [0]      ' 0 = no dots, adaptive bitrate
    'bitrates  = [348]    ' <500 Kbps = 1 dot
    'bitrates  = [664]    ' <800 Kbps = 2 dots
    'bitrates  = [996]    ' <1.1Mbps  = 3 dots
    'bitrates  = [2048]   ' >=1.1Mbps = 4 dots
   
    ' Uncomment this entry. Replace urls with the red urls assignment using your Playback URL from the upLynk CMS.
    ' Change qualities to HD.  Add the srt = "" to avoid a missing assignment error in Roku's code.
    ' WABC test stream from upLynk
      qualities = ["HD"]
      streamformat = "mp4"
      srt = ""

    videoclip = CreateObject("roAssociativeArray")
    videoclip.StreamBitrates = bitrates
    videoclip.StreamUrls = [args.url]
    videoclip.StreamQualities = qualities
    videoclip.StreamFormat = StreamFormat
    videoclip.Title = [args.title]
    ' Explicity declare the Switching Strategy
    videoclip.SwitchingStrategy = "full-adaptation"
    print "srt = ";srt
    if srt <> invalid and srt <> "" then
        videoclip.SubtitleUrl = srt
    end if
    
    video.SetContent(videoclip)
    ' The following lines of code work around Roku's HTTPS request issues
    video.SetCertificatesFile("common:/certs/ca-bundle.crt")
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
                print "play failed: "; msg.GetMessage()
            else
                print "Unknown event: "; msg.GetType(); " msg: "; msg.GetMessage()
            endif
        end if
    end while
End Function
