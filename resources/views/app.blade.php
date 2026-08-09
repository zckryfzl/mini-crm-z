<title inertia>
    {{ config('app.name', 'FNXPERTS Mini CRM') }}
</title>

<link rel="icon" type="image/x-icon" href="/favicon.ico">

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.bunny.net">

<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

<!-- Scripts -->
@routes

@viteReactRefresh

@vite([
    'resources/js/app.tsx',
    "resources/js/Pages/{$page['component']}.tsx"
])

@inertiaHead
</head>


<body class="font-sans antialiased">

    @inertia

</body>