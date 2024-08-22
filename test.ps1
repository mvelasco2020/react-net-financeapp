

1..3000 | ForEach-Object -Parallel {
    $i = 0
    $j = 1
    while ($i -lt 10000) {
       $content =  (Invoke-WebRequest -uri 'https://google.com' -Method Get).RawContentLength
        Write-Host "$_ $i $j $content"
        $i++
        $j++
    }
} -ThrottleLimit 100
