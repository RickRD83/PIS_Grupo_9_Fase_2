ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([613885.901837, 9640675.135008, 614441.712824, 9641163.859245]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_DEM_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_1_0.png" /> -8<br />\
    <img src="styles/legend/DEM_1_1.png" /> 68<br />\
    <img src="styles/legend/DEM_1_2.png" /> 144<br />\
    <img src="styles/legend/DEM_1_3.png" /> 220<br />\
    <img src="styles/legend/DEM_1_4.png" /> 296<br />\
    <img src="styles/legend/DEM_1_5.png" /> 372<br />\
    <img src="styles/legend/DEM_1_6.png" /> 448<br />\
    <img src="styles/legend/DEM_1_7.png" /> 525<br />\
    <img src="styles/legend/DEM_1_8.png" /> 601<br />\
    <img src="styles/legend/DEM_1_9.png" /> 677<br />\
    <img src="styles/legend/DEM_1_10.png" /> 753<br />\
    <img src="styles/legend/DEM_1_11.png" /> 829<br />\
    <img src="styles/legend/DEM_1_12.png" /> 905<br />\
    <img src="styles/legend/DEM_1_13.png" /> 981<br />\
    <img src="styles/legend/DEM_1_14.png" /> 1057<br />\
    <img src="styles/legend/DEM_1_15.png" /> 1133<br />\
    <img src="styles/legend/DEM_1_16.png" /> 1209<br />\
    <img src="styles/legend/DEM_1_17.png" /> 1285<br />\
    <img src="styles/legend/DEM_1_18.png" /> 1361<br />\
    <img src="styles/legend/DEM_1_19.png" /> 1437<br />\
    <img src="styles/legend/DEM_1_20.png" /> 1514<br />\
    <img src="styles/legend/DEM_1_21.png" /> 1590<br />\
    <img src="styles/legend/DEM_1_22.png" /> 1666<br />\
    <img src="styles/legend/DEM_1_23.png" /> 1742<br />\
    <img src="styles/legend/DEM_1_24.png" /> 1818<br />\
    <img src="styles/legend/DEM_1_25.png" /> 1894<br />\
    <img src="styles/legend/DEM_1_26.png" /> 1970<br />\
    <img src="styles/legend/DEM_1_27.png" /> 2046<br />\
    <img src="styles/legend/DEM_1_28.png" /> 2122<br />\
    <img src="styles/legend/DEM_1_29.png" /> 2198<br />\
    <img src="styles/legend/DEM_1_30.png" /> 2274<br />\
    <img src="styles/legend/DEM_1_31.png" /> 2350<br />\
    <img src="styles/legend/DEM_1_32.png" /> 2427<br />\
    <img src="styles/legend/DEM_1_33.png" /> 2503<br />\
    <img src="styles/legend/DEM_1_34.png" /> 2579<br />\
    <img src="styles/legend/DEM_1_35.png" /> 2655<br />\
    <img src="styles/legend/DEM_1_36.png" /> 2731<br />\
    <img src="styles/legend/DEM_1_37.png" /> 2807<br />\
    <img src="styles/legend/DEM_1_38.png" /> 2883<br />\
    <img src="styles/legend/DEM_1_39.png" /> 2959<br />\
    <img src="styles/legend/DEM_1_40.png" /> 3035<br />\
    <img src="styles/legend/DEM_1_41.png" /> 3111<br />\
    <img src="styles/legend/DEM_1_42.png" /> 3187<br />\
    <img src="styles/legend/DEM_1_43.png" /> 3263<br />\
    <img src="styles/legend/DEM_1_44.png" /> 3339<br />\
    <img src="styles/legend/DEM_1_45.png" /> 3416<br />\
    <img src="styles/legend/DEM_1_46.png" /> 3492<br />\
    <img src="styles/legend/DEM_1_47.png" /> 3568<br />\
    <img src="styles/legend/DEM_1_48.png" /> 3644<br />\
    <img src="styles/legend/DEM_1_49.png" /> 3720<br />\
    <img src="styles/legend/DEM_1_50.png" /> 3796<br />\
    <img src="styles/legend/DEM_1_51.png" /> 3872<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_1.png",
            attributions: ' ',
            projection: 'EPSG:32717',
            alwaysInRange: true,
            imageExtent: [580903.312500, 9625460.250000, 664640.812500, 9697585.250000]
        })
    });

        var lyr_GoogleSatelite_2 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_pendientes_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'pendientes<br />\
    <img src="styles/legend/pendientes_4_0.png" /> 0.0000<br />\
    <img src="styles/legend/pendientes_4_1.png" /> 2.3497<br />\
    <img src="styles/legend/pendientes_4_2.png" /> 4.6995<br />\
    <img src="styles/legend/pendientes_4_3.png" /> 7.0492<br />\
    <img src="styles/legend/pendientes_4_4.png" /> 9.3989<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/pendientes_4.png",
            attributions: ' ',
            projection: 'EPSG:32717',
            alwaysInRange: true,
            imageExtent: [613845.812500, 9640665.250000, 614445.812500, 9641165.250000]
        })
    });
var lyr_orientaciones_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'orientaciones<br />\
    <img src="styles/legend/orientaciones_5_0.png" /> 0.0000 - 88.4149<br />\
    <img src="styles/legend/orientaciones_5_1.png" /> 88.4149 - 176.8299<br />\
    <img src="styles/legend/orientaciones_5_2.png" /> 176.8299 - 265.2448<br />\
    <img src="styles/legend/orientaciones_5_3.png" /> 265.2448 - 353.6598<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/orientaciones_5.png",
            attributions: ' ',
            projection: 'EPSG:32717',
            alwaysInRange: true,
            imageExtent: [613845.812500, 9640677.750000, 614445.812500, 9641165.250000]
        })
    });
var format_Limitesadministrativos_6 = new ol.format.GeoJSON();
var features_Limitesadministrativos_6 = format_Limitesadministrativos_6.readFeatures(json_Limitesadministrativos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Limitesadministrativos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesadministrativos_6.addFeatures(features_Limitesadministrativos_6);
var lyr_Limitesadministrativos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesadministrativos_6, 
                style: style_Limitesadministrativos_6,
                popuplayertitle: 'Limites administrativos',
                interactive: true,
                title: '<img src="styles/legend/Limitesadministrativos_6.png" /> Limites administrativos'
            });
var format_Areatotaldeestudio_7 = new ol.format.GeoJSON();
var features_Areatotaldeestudio_7 = format_Areatotaldeestudio_7.readFeatures(json_Areatotaldeestudio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Areatotaldeestudio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areatotaldeestudio_7.addFeatures(features_Areatotaldeestudio_7);
var lyr_Areatotaldeestudio_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areatotaldeestudio_7, 
                style: style_Areatotaldeestudio_7,
                popuplayertitle: 'Area total de estudio',
                interactive: true,
                title: '<img src="styles/legend/Areatotaldeestudio_7.png" /> Area total de estudio'
            });
var format_Informacindelreadeestudio_8 = new ol.format.GeoJSON();
var features_Informacindelreadeestudio_8 = format_Informacindelreadeestudio_8.readFeatures(json_Informacindelreadeestudio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Informacindelreadeestudio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Informacindelreadeestudio_8.addFeatures(features_Informacindelreadeestudio_8);
var lyr_Informacindelreadeestudio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Informacindelreadeestudio_8, 
                style: style_Informacindelreadeestudio_8,
                popuplayertitle: 'Información del área de estudio',
                interactive: true,
                title: '<img src="styles/legend/Informacindelreadeestudio_8.png" /> Información del área de estudio'
            });
var format_Estaciones_9 = new ol.format.GeoJSON();
var features_Estaciones_9 = format_Estaciones_9.readFeatures(json_Estaciones_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Estaciones_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_9.addFeatures(features_Estaciones_9);
var lyr_Estaciones_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_9, 
                style: style_Estaciones_9,
                popuplayertitle: 'Estaciones',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_9.png" /> Estaciones'
            });
var format_Nivelderiesgoenlasreas_10 = new ol.format.GeoJSON();
var features_Nivelderiesgoenlasreas_10 = format_Nivelderiesgoenlasreas_10.readFeatures(json_Nivelderiesgoenlasreas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Nivelderiesgoenlasreas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivelderiesgoenlasreas_10.addFeatures(features_Nivelderiesgoenlasreas_10);
var lyr_Nivelderiesgoenlasreas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivelderiesgoenlasreas_10, 
                style: style_Nivelderiesgoenlasreas_10,
                popuplayertitle: 'Nivel de riesgo en las áreas',
                interactive: true,
    title: 'Nivel de riesgo en las áreas<br />\
    <img src="styles/legend/Nivelderiesgoenlasreas_10_0.png" /> Alto<br />\
    <img src="styles/legend/Nivelderiesgoenlasreas_10_1.png" /> Medio<br />\
    <img src="styles/legend/Nivelderiesgoenlasreas_10_2.png" /> Bajo<br />' });
var format_Niveldeinundacinencalles_11 = new ol.format.GeoJSON();
var features_Niveldeinundacinencalles_11 = format_Niveldeinundacinencalles_11.readFeatures(json_Niveldeinundacinencalles_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Niveldeinundacinencalles_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveldeinundacinencalles_11.addFeatures(features_Niveldeinundacinencalles_11);
var lyr_Niveldeinundacinencalles_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveldeinundacinencalles_11, 
                style: style_Niveldeinundacinencalles_11,
                popuplayertitle: 'Nivel de inundación en calles',
                interactive: true,
    title: 'Nivel de inundación en calles<br />\
    <img src="styles/legend/Niveldeinundacinencalles_11_0.png" /> Alto<br />\
    <img src="styles/legend/Niveldeinundacinencalles_11_1.png" /> Bajo<br />\
    <img src="styles/legend/Niveldeinundacinencalles_11_2.png" /> Medio<br />' });
var format_Linderosdelasreasdeestudio_12 = new ol.format.GeoJSON();
var features_Linderosdelasreasdeestudio_12 = format_Linderosdelasreasdeestudio_12.readFeatures(json_Linderosdelasreasdeestudio_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Linderosdelasreasdeestudio_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linderosdelasreasdeestudio_12.addFeatures(features_Linderosdelasreasdeestudio_12);
var lyr_Linderosdelasreasdeestudio_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linderosdelasreasdeestudio_12, 
                style: style_Linderosdelasreasdeestudio_12,
                popuplayertitle: 'Linderos de las áreas de estudio',
                interactive: true,
                title: '<img src="styles/legend/Linderosdelasreasdeestudio_12.png" /> Linderos de las áreas de estudio'
            });
var format_Sitiosvulnerables_13 = new ol.format.GeoJSON();
var features_Sitiosvulnerables_13 = format_Sitiosvulnerables_13.readFeatures(json_Sitiosvulnerables_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Sitiosvulnerables_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosvulnerables_13.addFeatures(features_Sitiosvulnerables_13);
var lyr_Sitiosvulnerables_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitiosvulnerables_13, 
                style: style_Sitiosvulnerables_13,
                popuplayertitle: 'Sitios vulnerables',
                interactive: true,
    title: 'Sitios vulnerables<br />\
    <img src="styles/legend/Sitiosvulnerables_13_0.png" /> Alto<br />\
    <img src="styles/legend/Sitiosvulnerables_13_1.png" /> Medio<br />\
    <img src="styles/legend/Sitiosvulnerables_13_2.png" /> Bajo<br />' });
var format_Parcelas_Catastrales_14 = new ol.format.GeoJSON();
var features_Parcelas_Catastrales_14 = format_Parcelas_Catastrales_14.readFeatures(json_Parcelas_Catastrales_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Parcelas_Catastrales_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_Catastrales_14.addFeatures(features_Parcelas_Catastrales_14);
var lyr_Parcelas_Catastrales_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_Catastrales_14, 
                style: style_Parcelas_Catastrales_14,
                popuplayertitle: 'Parcelas_Catastrales',
                interactive: true,
                title: '<img src="styles/legend/Parcelas_Catastrales_14.png" /> Parcelas_Catastrales'
            });
var format_Verticesdelreadeestudio_15 = new ol.format.GeoJSON();
var features_Verticesdelreadeestudio_15 = format_Verticesdelreadeestudio_15.readFeatures(json_Verticesdelreadeestudio_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Verticesdelreadeestudio_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verticesdelreadeestudio_15.addFeatures(features_Verticesdelreadeestudio_15);
var lyr_Verticesdelreadeestudio_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verticesdelreadeestudio_15, 
                style: style_Verticesdelreadeestudio_15,
                popuplayertitle: 'Vertices del Área de estudio',
                interactive: true,
                title: '<img src="styles/legend/Verticesdelreadeestudio_15.png" /> Vertices del Área de estudio'
            });
var format_CURVAS_NIVEL_m_16 = new ol.format.GeoJSON();
var features_CURVAS_NIVEL_m_16 = format_CURVAS_NIVEL_m_16.readFeatures(json_CURVAS_NIVEL_m_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_CURVAS_NIVEL_m_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVAS_NIVEL_m_16.addFeatures(features_CURVAS_NIVEL_m_16);
var lyr_CURVAS_NIVEL_m_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURVAS_NIVEL_m_16, 
                style: style_CURVAS_NIVEL_m_16,
                popuplayertitle: 'CURVAS_NIVEL_(m)',
                interactive: true,
                title: '<img src="styles/legend/CURVAS_NIVEL_m_16.png" /> CURVAS_NIVEL_(m)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DEM_1.setVisible(false);lyr_GoogleSatelite_2.setVisible(false);lyr_GoogleHybrid_3.setVisible(false);lyr_pendientes_4.setVisible(true);lyr_orientaciones_5.setVisible(true);lyr_Limitesadministrativos_6.setVisible(true);lyr_Areatotaldeestudio_7.setVisible(true);lyr_Informacindelreadeestudio_8.setVisible(true);lyr_Estaciones_9.setVisible(true);lyr_Nivelderiesgoenlasreas_10.setVisible(true);lyr_Niveldeinundacinencalles_11.setVisible(true);lyr_Linderosdelasreasdeestudio_12.setVisible(true);lyr_Sitiosvulnerables_13.setVisible(true);lyr_Parcelas_Catastrales_14.setVisible(true);lyr_Verticesdelreadeestudio_15.setVisible(true);lyr_CURVAS_NIVEL_m_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DEM_1,lyr_GoogleSatelite_2,lyr_GoogleHybrid_3,lyr_pendientes_4,lyr_orientaciones_5,lyr_Limitesadministrativos_6,lyr_Areatotaldeestudio_7,lyr_Informacindelreadeestudio_8,lyr_Estaciones_9,lyr_Nivelderiesgoenlasreas_10,lyr_Niveldeinundacinencalles_11,lyr_Linderosdelasreasdeestudio_12,lyr_Sitiosvulnerables_13,lyr_Parcelas_Catastrales_14,lyr_Verticesdelreadeestudio_15,lyr_CURVAS_NIVEL_m_16];
lyr_Limitesadministrativos_6.set('fieldAliases', {'Codigo': 'Codigo', 'Nombre': 'Nombre', 'Tipo': 'Tipo', 'Area (Ha)': 'Area (Ha)', 'Pob_est': 'Pob_est', 'Vista_Web': 'Vista_Web', });
lyr_Areatotaldeestudio_7.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Informacindelreadeestudio_8.set('fieldAliases', {'parametro': 'Parametro', 'valor': 'Valor', 'Id': 'Id', 'unidad': 'Unidad de medición', 'descrip': 'Descripción', 'Fuente_dat': 'Fuente del dato', 'Vista_Web': 'Vista_Web', });
lyr_Estaciones_9.set('fieldAliases', {'id': 'id', 'X (Este)': 'X (Este)', 'Y Norte': 'Y Norte', 'Código': 'Código', 'Nombre': 'Nombre', 'Preci_Me_A': 'Preci_Me_A', 'Web': 'Web', });
lyr_Nivelderiesgoenlasreas_10.set('fieldAliases', {'id': 'id', 'Area': 'Área (m2)', 'Riesgo': 'Nivel de riesgo', 'Calles_Aso': 'Calles asociadas', 'Crecida_es': 'Crecida esperada', 'Impac_espe': 'Impacto esperado', 'Vista_Web': 'Vista_Web', });
lyr_Niveldeinundacinencalles_11.set('fieldAliases', {'id': 'id', 'nombre_via': 'Nombre de la calle', 'Riesgo': 'Riesgo de inundación', 'Tipo_rod': 'Tipo de rodamiento', 'Est_dren': 'Drenaje', 'Longit_m': 'Longitud (m)', 'ancho_m': 'Ancho (m)', 'Peralt_pct': 'Peralte (%)', 'Inun_max_m': 'Inundación Máx (m)', 'pob_expues': 'Población expuesta', 'Vista_web': 'Vista_web', });
lyr_Linderosdelasreasdeestudio_12.set('fieldAliases', {'FID': 'FID', 'Distance': 'Distance', 'azimuth': 'azimuth', 'Rumbo': 'Rumbo', 'Vista_Web': 'Vista_Web', });
lyr_Sitiosvulnerables_13.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo de vía', 'Niv_vulner': 'Nivel de Vulnerabilidad', 'Calle_refe': 'Calles de referencia', 'Acc_Recome': 'Acciones recomendadas', 'Nombre_L': 'Nombre del lugar', 'Coord_X': 'Coordenadas Este (UTM)', 'Coord_Y': 'Coordenadas Norte (UTM)', 'Vista_Web': 'Vista_Web', });
lyr_Parcelas_Catastrales_14.set('fieldAliases', {'id': 'id', 'IDpredial': 'IDpredial', 'Propiet': 'Propiet', 'Uso_suelo': 'Uso_suelo', 'Area': 'Area', 'Val_Catas': 'Val_Catas', 'Vista_Web': 'Vista_Web', });
lyr_Verticesdelreadeestudio_15.set('fieldAliases', {'id': 'id', 'Coord_E': 'Coordenadas Este (UTM)', 'Coord_N': 'Coordenadas Norte (UTM)', 'Vista_Web': 'Vista_Web', });
lyr_CURVAS_NIVEL_m_16.set('fieldAliases', {'ID': 'ID', 'Z_ELEVACIO': 'Z_ELEVACIO', });
lyr_Limitesadministrativos_6.set('fieldImages', {'Codigo': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'TextEdit', 'Area (Ha)': 'TextEdit', 'Pob_est': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Areatotaldeestudio_7.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_Informacindelreadeestudio_8.set('fieldImages', {'parametro': 'TextEdit', 'valor': 'TextEdit', 'Id': 'TextEdit', 'unidad': 'TextEdit', 'descrip': 'TextEdit', 'Fuente_dat': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Estaciones_9.set('fieldImages', {'id': 'TextEdit', 'X (Este)': 'TextEdit', 'Y Norte': 'TextEdit', 'Código': 'TextEdit', 'Nombre': 'TextEdit', 'Preci_Me_A': 'TextEdit', 'Web': 'TextEdit', });
lyr_Nivelderiesgoenlasreas_10.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Riesgo': 'TextEdit', 'Calles_Aso': 'TextEdit', 'Crecida_es': 'TextEdit', 'Impac_espe': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Niveldeinundacinencalles_11.set('fieldImages', {'id': 'TextEdit', 'nombre_via': 'TextEdit', 'Riesgo': 'TextEdit', 'Tipo_rod': 'TextEdit', 'Est_dren': 'TextEdit', 'Longit_m': 'TextEdit', 'ancho_m': 'TextEdit', 'Peralt_pct': 'TextEdit', 'Inun_max_m': 'TextEdit', 'pob_expues': 'TextEdit', 'Vista_web': 'TextEdit', });
lyr_Linderosdelasreasdeestudio_12.set('fieldImages', {'FID': 'TextEdit', 'Distance': 'TextEdit', 'azimuth': 'TextEdit', 'Rumbo': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Sitiosvulnerables_13.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Niv_vulner': 'TextEdit', 'Calle_refe': 'TextEdit', 'Acc_Recome': 'TextEdit', 'Nombre_L': 'TextEdit', 'Coord_X': 'TextEdit', 'Coord_Y': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Parcelas_Catastrales_14.set('fieldImages', {'id': 'TextEdit', 'IDpredial': 'TextEdit', 'Propiet': 'TextEdit', 'Uso_suelo': 'TextEdit', 'Area': 'TextEdit', 'Val_Catas': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_Verticesdelreadeestudio_15.set('fieldImages', {'id': 'TextEdit', 'Coord_E': 'TextEdit', 'Coord_N': 'TextEdit', 'Vista_Web': 'TextEdit', });
lyr_CURVAS_NIVEL_m_16.set('fieldImages', {'ID': 'Range', 'Z_ELEVACIO': 'TextEdit', });
lyr_Limitesadministrativos_6.set('fieldLabels', {'Codigo': 'hidden field', 'Nombre': 'hidden field', 'Tipo': 'hidden field', 'Area (Ha)': 'hidden field', 'Pob_est': 'hidden field', 'Vista_Web': 'no label', });
lyr_Areatotaldeestudio_7.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', });
lyr_Informacindelreadeestudio_8.set('fieldLabels', {'parametro': 'hidden field', 'valor': 'hidden field', 'Id': 'hidden field', 'unidad': 'hidden field', 'descrip': 'hidden field', 'Fuente_dat': 'hidden field', 'Vista_Web': 'no label', });
lyr_Estaciones_9.set('fieldLabels', {'id': 'hidden field', 'X (Este)': 'hidden field', 'Y Norte': 'hidden field', 'Código': 'hidden field', 'Nombre': 'hidden field', 'Preci_Me_A': 'hidden field', 'Web': 'no label', });
lyr_Nivelderiesgoenlasreas_10.set('fieldLabels', {'id': 'hidden field', 'Area': 'hidden field', 'Riesgo': 'hidden field', 'Calles_Aso': 'hidden field', 'Crecida_es': 'hidden field', 'Impac_espe': 'hidden field', 'Vista_Web': 'no label', });
lyr_Niveldeinundacinencalles_11.set('fieldLabels', {'id': 'hidden field', 'nombre_via': 'hidden field', 'Riesgo': 'hidden field', 'Tipo_rod': 'hidden field', 'Est_dren': 'hidden field', 'Longit_m': 'hidden field', 'ancho_m': 'hidden field', 'Peralt_pct': 'hidden field', 'Inun_max_m': 'hidden field', 'pob_expues': 'hidden field', 'Vista_web': 'no label', });
lyr_Linderosdelasreasdeestudio_12.set('fieldLabels', {'FID': 'hidden field', 'Distance': 'inline label - always visible', 'azimuth': 'inline label - always visible', 'Rumbo': 'inline label - always visible', 'Vista_Web': 'no label', });
lyr_Sitiosvulnerables_13.set('fieldLabels', {'id': 'hidden field', 'Tipo': 'hidden field', 'Niv_vulner': 'hidden field', 'Calle_refe': 'hidden field', 'Acc_Recome': 'hidden field', 'Nombre_L': 'hidden field', 'Coord_X': 'hidden field', 'Coord_Y': 'hidden field', 'Vista_Web': 'no label', });
lyr_Parcelas_Catastrales_14.set('fieldLabels', {'id': 'hidden field', 'IDpredial': 'hidden field', 'Propiet': 'hidden field', 'Uso_suelo': 'hidden field', 'Area': 'hidden field', 'Val_Catas': 'hidden field', 'Vista_Web': 'no label', });
lyr_Verticesdelreadeestudio_15.set('fieldLabels', {'id': 'hidden field', 'Coord_E': 'hidden field', 'Coord_N': 'hidden field', 'Vista_Web': 'no label', });
lyr_CURVAS_NIVEL_m_16.set('fieldLabels', {'ID': 'hidden field', 'Z_ELEVACIO': 'inline label - always visible', });
lyr_CURVAS_NIVEL_m_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});