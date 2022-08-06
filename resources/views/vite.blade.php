<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        @vite('resources/js/controllers/web/app.ts')
    </head>
    <body>
        <div class="test"><editor-simple /></div>
    </body>
</html>
