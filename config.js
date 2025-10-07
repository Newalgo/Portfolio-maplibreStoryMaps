var config = {
    style: 'https://api.maptiler.com/maps/topo-v2/style.json?key=hbfIrRudmmPJZBiiJblO',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'Portfolio de Nathan',
    logo: '',
    subtitle: 'lets dive in',
    byline: 'Nathan',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'Work Experience - CICR',
            alignment: 'left',
            hidden: false,
            title: 'CICR Job GIS Analyst',
            image: './images/CICR.png',
            caption: 'Source image caption',
            website: '<a href="" target="_blank">Website</a>',
            author: 'Digital Storyteller',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'boulot de GIS au CICR',
            location: {
                center: [6.13755, 46.22798],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Work Experience - Guyana',
            alignment: 'right',
            hidden: false,
            title: 'CNES, CSG',
            image: './images/CSG.png',
            description: 'Database Administrator',
            location: {
                center: [-52.73619, 5.19733],
                zoom: 8.39,
                pitch: 0,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        }
    ]
};
