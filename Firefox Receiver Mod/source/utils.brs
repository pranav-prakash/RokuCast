' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

function fileExists(file as String) as integer
    fs = createObject("roFileSystem")
    if fs.exists(file) then
        return 1
    end if
    return 0
end function

' Registry helper functions. The registry is the only form of permanent storage
' Notes: http://sdkdocs.roku.com/display/sdkdoc/roRegistry

function registryRead(key, section = invalid)
    if section = invalid then
        section = "Default"
    end if
    sec = createObject("roRegistrySection", section)
    if sec.exists(key) then
        return sec.read(key)
    end if
    return invalid
end function

function registryWrite(key, val, section = invalid)
    if section = invalid then
        section = "Default"
    end if
    sec = createObject("roRegistrySection", section)
    if sec.write(key, val) then
        return sec.flush()
    end if
    return false
end function

function registryDelete(key, section = invalid)
    if section = invalid then
        section = "Default"
    end if
    sec = createObject("roRegistrySection", section)
    if sec.delete(key) then
        return sec.flush()
    end if
    return false
end function

' Convert associative array (hash) to a JSON string
' Source: http://forums.roku.com/viewtopic.php?p=200229

function toJSON(array as object) as string
    if type(array) = "roArray" then
        return arrayToJSON(array)
    else if type(array) = "roAssociativeArray" then
        return associativeArrayToJSON(array)
    end if
    return invalid
end function

function associativeArrayToJSON(array as object) as string
    output = "{"
   
    for each key in array
        output = output + chr(34) + key + chr(34) + ": "
        value = array[key]
        valueType = type(value)
        if valueType = "roString" or valueType = "String" then
            output = output + chr(34) + value + chr(34)
        else if valueType = "roInt" or valueType = "roInteger" or valueType = "roFloat" or valueType = "Float" then
            output = output + value.toStr()
        else if valueType = "roBoolean" or valueType = "Boolean" then
            output = output + iif( value, "true", "false" )
        else if valueType = "roArray" then
            output = output + arrayToJSON(value)
        else if valueType = "roAssociativeArray" then
            output = output + associativeArrayToJSON(value)
        end if
        output = output + ","
    next
    if right(output, 1) = "," then
        output = left(output, len(output) - 1)
    end if
   
    output = output + "}"
    return output
end function

function arrayToJSON(array as object) as string
    output = "["
   
    for each value in array
        valueType = type(value)
        if valueType = "roString" or valueType= "String" then
            output = output + chr(34) + value + chr(34)
        else if valueType = "roInt" or valueType = "roInteger" or valueType = "roFloat" or valueType = "Float" then
            output = output + value.toStr()
        else if valueType = "roBoolean" or valueType = "Boolean" then
            output = output + iif(value, "true", "false")
        else if valueType = "roArray" then
            output = output + arrayToJSON(value)
        else if valueType = "roAssociativeArray" then
            output = output + associativeArrayToJSON(value)
        end if
        output = output + ","
    next
    if right(output, 1) = "," then
        output = left(output, len(output) - 1)
    end if
   
    output = output + "]"
    return output
end function

function iif(condition, result1, result2)
    if condition then
        return result1
    end if
    return result2
end function

' Return the first IP address of the Roku device
' Source: https://github.com/plexinc/roku-client-public

function getFirstIPAddress() as string
    device = createObject("roDeviceInfo")
    addrs = device.getIPAddrs()
    addrs.reset()
    if addrs.isNext() then
        return addrs[addrs.next()]
    end if
    return invalid
end function

function getAppVersion() as string
    version = invalid
    major = invalid
    minor = invalid

    manifest = ReadAsciiFile("pkg:/manifest")
    lines = manifest.tokenize(chr(10))
    for each line in lines
        entry = line.tokenize("=")
        if instr(entry[0], "major") <> 0 then
            major = entry[1].trim()
        end if
        if instr(entry[0], "minor") <> 0 then
            minor = entry[1].trim()
        end if
    end for

    if major <> invalid then
        version = major
    end if
    if minor <> invalid then
        version = version + "." + minor
    end if

    return version
end function
