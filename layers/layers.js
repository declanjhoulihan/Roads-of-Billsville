var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_Lines_2 = new ol.format.GeoJSON();
var features_Lines_2 = format_Lines_2.readFeatures(json_Lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_2.addFeatures(features_Lines_2);
var lyr_Lines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lines_2, 
                style: style_Lines_2,
                interactive: true,
                title: '<img src="styles/legend/Lines_2.png" /> Lines'
            });
var format_NotRealRoads_3 = new ol.format.GeoJSON();
var features_NotRealRoads_3 = format_NotRealRoads_3.readFeatures(json_NotRealRoads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NotRealRoads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotRealRoads_3.addFeatures(features_NotRealRoads_3);
var lyr_NotRealRoads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NotRealRoads_3, 
                style: style_NotRealRoads_3,
                interactive: true,
                title: '<img src="styles/legend/NotRealRoads_3.png" /> Not Real Roads'
            });
var format_NHoosacEofColetracks_4 = new ol.format.GeoJSON();
var features_NHoosacEofColetracks_4 = format_NHoosacEofColetracks_4.readFeatures(json_NHoosacEofColetracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NHoosacEofColetracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NHoosacEofColetracks_4.addFeatures(features_NHoosacEofColetracks_4);
var lyr_NHoosacEofColetracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NHoosacEofColetracks_4, 
                style: style_NHoosacEofColetracks_4,
                interactive: true,
                title: '<img src="styles/legend/NHoosacEofColetracks_4.png" /> NHoosacEofCole, tracks'
            });
var format_PetersburgRdtracks_5 = new ol.format.GeoJSON();
var features_PetersburgRdtracks_5 = format_PetersburgRdtracks_5.readFeatures(json_PetersburgRdtracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetersburgRdtracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetersburgRdtracks_5.addFeatures(features_PetersburgRdtracks_5);
var lyr_PetersburgRdtracks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetersburgRdtracks_5, 
                style: style_PetersburgRdtracks_5,
                interactive: true,
                title: '<img src="styles/legend/PetersburgRdtracks_5.png" /> Petersburg Rd, tracks'
            });
var format_ColeOctopustracks_6 = new ol.format.GeoJSON();
var features_ColeOctopustracks_6 = format_ColeOctopustracks_6.readFeatures(json_ColeOctopustracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColeOctopustracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColeOctopustracks_6.addFeatures(features_ColeOctopustracks_6);
var lyr_ColeOctopustracks_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ColeOctopustracks_6, 
                style: style_ColeOctopustracks_6,
                interactive: true,
                title: '<img src="styles/legend/ColeOctopustracks_6.png" /> ColeOctopus, tracks'
            });
var format_Sprucestracks_7 = new ol.format.GeoJSON();
var features_Sprucestracks_7 = format_Sprucestracks_7.readFeatures(json_Sprucestracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sprucestracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sprucestracks_7.addFeatures(features_Sprucestracks_7);
var lyr_Sprucestracks_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sprucestracks_7, 
                style: style_Sprucestracks_7,
                interactive: true,
                title: '<img src="styles/legend/Sprucestracks_7.png" /> Spruces, tracks'
            });
var format_NWtoVTtracks_8 = new ol.format.GeoJSON();
var features_NWtoVTtracks_8 = format_NWtoVTtracks_8.readFeatures(json_NWtoVTtracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NWtoVTtracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NWtoVTtracks_8.addFeatures(features_NWtoVTtracks_8);
var lyr_NWtoVTtracks_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NWtoVTtracks_8, 
                style: style_NWtoVTtracks_8,
                interactive: true,
                title: '<img src="styles/legend/NWtoVTtracks_8.png" /> NWtoVT, tracks'
            });
var format_Blairtracks_9 = new ol.format.GeoJSON();
var features_Blairtracks_9 = format_Blairtracks_9.readFeatures(json_Blairtracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blairtracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blairtracks_9.addFeatures(features_Blairtracks_9);
var lyr_Blairtracks_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Blairtracks_9, 
                style: style_Blairtracks_9,
                interactive: true,
                title: '<img src="styles/legend/Blairtracks_9.png" /> Blair, tracks'
            });
var format_PineCobbleDevtracks_10 = new ol.format.GeoJSON();
var features_PineCobbleDevtracks_10 = format_PineCobbleDevtracks_10.readFeatures(json_PineCobbleDevtracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PineCobbleDevtracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PineCobbleDevtracks_10.addFeatures(features_PineCobbleDevtracks_10);
var lyr_PineCobbleDevtracks_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PineCobbleDevtracks_10, 
                style: style_PineCobbleDevtracks_10,
                interactive: true,
                title: '<img src="styles/legend/PineCobbleDevtracks_10.png" /> PineCobbleDev, tracks'
            });
var format_BulkleyNWMainOctotracks_11 = new ol.format.GeoJSON();
var features_BulkleyNWMainOctotracks_11 = format_BulkleyNWMainOctotracks_11.readFeatures(json_BulkleyNWMainOctotracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BulkleyNWMainOctotracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BulkleyNWMainOctotracks_11.addFeatures(features_BulkleyNWMainOctotracks_11);
var lyr_BulkleyNWMainOctotracks_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BulkleyNWMainOctotracks_11, 
                style: style_BulkleyNWMainOctotracks_11,
                interactive: true,
                title: '<img src="styles/legend/BulkleyNWMainOctotracks_11.png" /> BulkleyNWMainOcto, tracks'
            });
var format_Idestracks_12 = new ol.format.GeoJSON();
var features_Idestracks_12 = format_Idestracks_12.readFeatures(json_Idestracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Idestracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Idestracks_12.addFeatures(features_Idestracks_12);
var lyr_Idestracks_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Idestracks_12, 
                style: style_Idestracks_12,
                interactive: true,
                title: '<img src="styles/legend/Idestracks_12.png" /> Ides, tracks'
            });
var format_Galetracks_13 = new ol.format.GeoJSON();
var features_Galetracks_13 = format_Galetracks_13.readFeatures(json_Galetracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galetracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galetracks_13.addFeatures(features_Galetracks_13);
var lyr_Galetracks_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Galetracks_13, 
                style: style_Galetracks_13,
                interactive: true,
                title: '<img src="styles/legend/Galetracks_13.png" /> Gale, tracks'
            });
var format_HendersonBrookSnadSpringtracks_14 = new ol.format.GeoJSON();
var features_HendersonBrookSnadSpringtracks_14 = format_HendersonBrookSnadSpringtracks_14.readFeatures(json_HendersonBrookSnadSpringtracks_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HendersonBrookSnadSpringtracks_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HendersonBrookSnadSpringtracks_14.addFeatures(features_HendersonBrookSnadSpringtracks_14);
var lyr_HendersonBrookSnadSpringtracks_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HendersonBrookSnadSpringtracks_14, 
                style: style_HendersonBrookSnadSpringtracks_14,
                interactive: true,
                title: '<img src="styles/legend/HendersonBrookSnadSpringtracks_14.png" /> HendersonBrookSnadSpring, tracks'
            });
var format_BeeHilltracks_15 = new ol.format.GeoJSON();
var features_BeeHilltracks_15 = format_BeeHilltracks_15.readFeatures(json_BeeHilltracks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeeHilltracks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeeHilltracks_15.addFeatures(features_BeeHilltracks_15);
var lyr_BeeHilltracks_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeeHilltracks_15, 
                style: style_BeeHilltracks_15,
                interactive: true,
                title: '<img src="styles/legend/BeeHilltracks_15.png" /> BeeHill, tracks'
            });
var format_Luce1tracks_16 = new ol.format.GeoJSON();
var features_Luce1tracks_16 = format_Luce1tracks_16.readFeatures(json_Luce1tracks_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luce1tracks_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luce1tracks_16.addFeatures(features_Luce1tracks_16);
var lyr_Luce1tracks_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luce1tracks_16, 
                style: style_Luce1tracks_16,
                interactive: true,
                title: '<img src="styles/legend/Luce1tracks_16.png" /> Luce1, tracks'
            });
var format_Luce2tracks_17 = new ol.format.GeoJSON();
var features_Luce2tracks_17 = format_Luce2tracks_17.readFeatures(json_Luce2tracks_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luce2tracks_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luce2tracks_17.addFeatures(features_Luce2tracks_17);
var lyr_Luce2tracks_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Luce2tracks_17, 
                style: style_Luce2tracks_17,
                interactive: true,
                title: '<img src="styles/legend/Luce2tracks_17.png" /> Luce2, tracks'
            });
var format_Syndicatetracks_18 = new ol.format.GeoJSON();
var features_Syndicatetracks_18 = format_Syndicatetracks_18.readFeatures(json_Syndicatetracks_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Syndicatetracks_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Syndicatetracks_18.addFeatures(features_Syndicatetracks_18);
var lyr_Syndicatetracks_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Syndicatetracks_18, 
                style: style_Syndicatetracks_18,
                interactive: true,
                title: '<img src="styles/legend/Syndicatetracks_18.png" /> Syndicate, tracks'
            });
var format_Rt7toVTtracks_19 = new ol.format.GeoJSON();
var features_Rt7toVTtracks_19 = format_Rt7toVTtracks_19.readFeatures(json_Rt7toVTtracks_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt7toVTtracks_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt7toVTtracks_19.addFeatures(features_Rt7toVTtracks_19);
var lyr_Rt7toVTtracks_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt7toVTtracks_19, 
                style: style_Rt7toVTtracks_19,
                interactive: true,
                title: '<img src="styles/legend/Rt7toVTtracks_19.png" /> Rt7toVT, tracks'
            });
var format_HamelRdtracks_20 = new ol.format.GeoJSON();
var features_HamelRdtracks_20 = format_HamelRdtracks_20.readFeatures(json_HamelRdtracks_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HamelRdtracks_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HamelRdtracks_20.addFeatures(features_HamelRdtracks_20);
var lyr_HamelRdtracks_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HamelRdtracks_20, 
                style: style_HamelRdtracks_20,
                interactive: true,
                title: '<img src="styles/legend/HamelRdtracks_20.png" /> HamelRd, tracks'
            });
var format_ChestnutCummingstracks_21 = new ol.format.GeoJSON();
var features_ChestnutCummingstracks_21 = format_ChestnutCummingstracks_21.readFeatures(json_ChestnutCummingstracks_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChestnutCummingstracks_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChestnutCummingstracks_21.addFeatures(features_ChestnutCummingstracks_21);
var lyr_ChestnutCummingstracks_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChestnutCummingstracks_21, 
                style: style_ChestnutCummingstracks_21,
                interactive: true,
                title: '<img src="styles/legend/ChestnutCummingstracks_21.png" /> ChestnutCummings, tracks'
            });
var format_McClainHarrisonBalloutracks_22 = new ol.format.GeoJSON();
var features_McClainHarrisonBalloutracks_22 = format_McClainHarrisonBalloutracks_22.readFeatures(json_McClainHarrisonBalloutracks_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McClainHarrisonBalloutracks_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McClainHarrisonBalloutracks_22.addFeatures(features_McClainHarrisonBalloutracks_22);
var lyr_McClainHarrisonBalloutracks_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_McClainHarrisonBalloutracks_22, 
                style: style_McClainHarrisonBalloutracks_22,
                interactive: true,
                title: '<img src="styles/legend/McClainHarrisonBalloutracks_22.png" /> McClainHarrisonBallou, tracks'
            });
var format_ScottHillRdtracks_23 = new ol.format.GeoJSON();
var features_ScottHillRdtracks_23 = format_ScottHillRdtracks_23.readFeatures(json_ScottHillRdtracks_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScottHillRdtracks_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScottHillRdtracks_23.addFeatures(features_ScottHillRdtracks_23);
var lyr_ScottHillRdtracks_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ScottHillRdtracks_23, 
                style: style_ScottHillRdtracks_23,
                interactive: true,
                title: '<img src="styles/legend/ScottHillRdtracks_23.png" /> ScottHillRd, tracks'
            });
var format_OffStrattontracks_24 = new ol.format.GeoJSON();
var features_OffStrattontracks_24 = format_OffStrattontracks_24.readFeatures(json_OffStrattontracks_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffStrattontracks_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffStrattontracks_24.addFeatures(features_OffStrattontracks_24);
var lyr_OffStrattontracks_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OffStrattontracks_24, 
                style: style_OffStrattontracks_24,
                interactive: true,
                title: '<img src="styles/legend/OffStrattontracks_24.png" /> OffStratton, tracks'
            });
var format_CharlesSummerMayMasontracks_25 = new ol.format.GeoJSON();
var features_CharlesSummerMayMasontracks_25 = format_CharlesSummerMayMasontracks_25.readFeatures(json_CharlesSummerMayMasontracks_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharlesSummerMayMasontracks_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharlesSummerMayMasontracks_25.addFeatures(features_CharlesSummerMayMasontracks_25);
var lyr_CharlesSummerMayMasontracks_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CharlesSummerMayMasontracks_25, 
                style: style_CharlesSummerMayMasontracks_25,
                interactive: true,
                title: '<img src="styles/legend/CharlesSummerMayMasontracks_25.png" /> CharlesSummerMayMason, tracks'
            });
var format_WhiteOakstracks_26 = new ol.format.GeoJSON();
var features_WhiteOakstracks_26 = format_WhiteOakstracks_26.readFeatures(json_WhiteOakstracks_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WhiteOakstracks_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WhiteOakstracks_26.addFeatures(features_WhiteOakstracks_26);
var lyr_WhiteOakstracks_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WhiteOakstracks_26, 
                style: style_WhiteOakstracks_26,
                interactive: true,
                title: '<img src="styles/legend/WhiteOakstracks_26.png" /> WhiteOaks, tracks'
            });
var format_Woodcocktracks_27 = new ol.format.GeoJSON();
var features_Woodcocktracks_27 = format_Woodcocktracks_27.readFeatures(json_Woodcocktracks_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Woodcocktracks_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Woodcocktracks_27.addFeatures(features_Woodcocktracks_27);
var lyr_Woodcocktracks_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Woodcocktracks_27, 
                style: style_Woodcocktracks_27,
                interactive: true,
                title: '<img src="styles/legend/Woodcocktracks_27.png" /> Woodcock, tracks'
            });
var format_Thornliebanktracks_28 = new ol.format.GeoJSON();
var features_Thornliebanktracks_28 = format_Thornliebanktracks_28.readFeatures(json_Thornliebanktracks_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thornliebanktracks_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thornliebanktracks_28.addFeatures(features_Thornliebanktracks_28);
var lyr_Thornliebanktracks_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Thornliebanktracks_28, 
                style: style_Thornliebanktracks_28,
                interactive: true,
                title: '<img src="styles/legend/Thornliebanktracks_28.png" /> Thornliebank, tracks'
            });
var format_MassAveSpurtracks_29 = new ol.format.GeoJSON();
var features_MassAveSpurtracks_29 = format_MassAveSpurtracks_29.readFeatures(json_MassAveSpurtracks_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MassAveSpurtracks_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MassAveSpurtracks_29.addFeatures(features_MassAveSpurtracks_29);
var lyr_MassAveSpurtracks_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MassAveSpurtracks_29, 
                style: style_MassAveSpurtracks_29,
                interactive: true,
                title: '<img src="styles/legend/MassAveSpurtracks_29.png" /> MassAveSpur, tracks'
            });
var format_SweetbrookStoneHilltracks_30 = new ol.format.GeoJSON();
var features_SweetbrookStoneHilltracks_30 = format_SweetbrookStoneHilltracks_30.readFeatures(json_SweetbrookStoneHilltracks_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SweetbrookStoneHilltracks_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SweetbrookStoneHilltracks_30.addFeatures(features_SweetbrookStoneHilltracks_30);
var lyr_SweetbrookStoneHilltracks_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SweetbrookStoneHilltracks_30, 
                style: style_SweetbrookStoneHilltracks_30,
                interactive: true,
                title: '<img src="styles/legend/SweetbrookStoneHilltracks_30.png" /> SweetbrookStoneHill, tracks'
            });
var format_Sabintracks_31 = new ol.format.GeoJSON();
var features_Sabintracks_31 = format_Sabintracks_31.readFeatures(json_Sabintracks_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sabintracks_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sabintracks_31.addFeatures(features_Sabintracks_31);
var lyr_Sabintracks_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sabintracks_31, 
                style: style_Sabintracks_31,
                interactive: true,
                title: '<img src="styles/legend/Sabintracks_31.png" /> Sabin, tracks'
            });
var format_CampusCleanUptracks_32 = new ol.format.GeoJSON();
var features_CampusCleanUptracks_32 = format_CampusCleanUptracks_32.readFeatures(json_CampusCleanUptracks_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampusCleanUptracks_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampusCleanUptracks_32.addFeatures(features_CampusCleanUptracks_32);
var lyr_CampusCleanUptracks_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CampusCleanUptracks_32, 
                style: style_CampusCleanUptracks_32,
                interactive: true,
                title: '<img src="styles/legend/CampusCleanUptracks_32.png" /> CampusCleanUp, tracks'
            });
var format_FinishLyndetracks_33 = new ol.format.GeoJSON();
var features_FinishLyndetracks_33 = format_FinishLyndetracks_33.readFeatures(json_FinishLyndetracks_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FinishLyndetracks_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FinishLyndetracks_33.addFeatures(features_FinishLyndetracks_33);
var lyr_FinishLyndetracks_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FinishLyndetracks_33, 
                style: style_FinishLyndetracks_33,
                interactive: true,
                title: '<img src="styles/legend/FinishLyndetracks_33.png" /> FinishLynde, tracks'
            });
var format_Rt2toNYtracks_34 = new ol.format.GeoJSON();
var features_Rt2toNYtracks_34 = format_Rt2toNYtracks_34.readFeatures(json_Rt2toNYtracks_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt2toNYtracks_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt2toNYtracks_34.addFeatures(features_Rt2toNYtracks_34);
var lyr_Rt2toNYtracks_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt2toNYtracks_34, 
                style: style_Rt2toNYtracks_34,
                interactive: true,
                title: '<img src="styles/legend/Rt2toNYtracks_34.png" /> Rt2toNY, tracks'
            });
var format_HopperPottertracks_35 = new ol.format.GeoJSON();
var features_HopperPottertracks_35 = format_HopperPottertracks_35.readFeatures(json_HopperPottertracks_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HopperPottertracks_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HopperPottertracks_35.addFeatures(features_HopperPottertracks_35);
var lyr_HopperPottertracks_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HopperPottertracks_35, 
                style: style_HopperPottertracks_35,
                interactive: true,
                title: '<img src="styles/legend/HopperPottertracks_35.png" /> HopperPotter, tracks'
            });
var format_SloanOldMilltracks_36 = new ol.format.GeoJSON();
var features_SloanOldMilltracks_36 = format_SloanOldMilltracks_36.readFeatures(json_SloanOldMilltracks_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SloanOldMilltracks_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SloanOldMilltracks_36.addFeatures(features_SloanOldMilltracks_36);
var lyr_SloanOldMilltracks_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SloanOldMilltracks_36, 
                style: style_SloanOldMilltracks_36,
                interactive: true,
                title: '<img src="styles/legend/SloanOldMilltracks_36.png" /> SloanOldMill, tracks'
            });
var format_TreadwellHollowBerlinTorreyWoodstracks_37 = new ol.format.GeoJSON();
var features_TreadwellHollowBerlinTorreyWoodstracks_37 = format_TreadwellHollowBerlinTorreyWoodstracks_37.readFeatures(json_TreadwellHollowBerlinTorreyWoodstracks_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreadwellHollowBerlinTorreyWoodstracks_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreadwellHollowBerlinTorreyWoodstracks_37.addFeatures(features_TreadwellHollowBerlinTorreyWoodstracks_37);
var lyr_TreadwellHollowBerlinTorreyWoodstracks_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TreadwellHollowBerlinTorreyWoodstracks_37, 
                style: style_TreadwellHollowBerlinTorreyWoodstracks_37,
                interactive: true,
                title: '<img src="styles/legend/TreadwellHollowBerlinTorreyWoodstracks_37.png" /> TreadwellHollowBerlinTorreyWoods, tracks'
            });
var format_LinearParktracks_38 = new ol.format.GeoJSON();
var features_LinearParktracks_38 = format_LinearParktracks_38.readFeatures(json_LinearParktracks_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinearParktracks_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinearParktracks_38.addFeatures(features_LinearParktracks_38);
var lyr_LinearParktracks_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LinearParktracks_38, 
                style: style_LinearParktracks_38,
                interactive: true,
                title: '<img src="styles/legend/LinearParktracks_38.png" /> LinearPark, tracks'
            });
var format_RoaringBrooktracks_39 = new ol.format.GeoJSON();
var features_RoaringBrooktracks_39 = format_RoaringBrooktracks_39.readFeatures(json_RoaringBrooktracks_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoaringBrooktracks_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoaringBrooktracks_39.addFeatures(features_RoaringBrooktracks_39);
var lyr_RoaringBrooktracks_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoaringBrooktracks_39, 
                style: style_RoaringBrooktracks_39,
                interactive: true,
                title: '<img src="styles/legend/RoaringBrooktracks_39.png" /> RoaringBrook, tracks'
            });
var format_Oblong437tracks_40 = new ol.format.GeoJSON();
var features_Oblong437tracks_40 = format_Oblong437tracks_40.readFeatures(json_Oblong437tracks_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oblong437tracks_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oblong437tracks_40.addFeatures(features_Oblong437tracks_40);
var lyr_Oblong437tracks_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oblong437tracks_40, 
                style: style_Oblong437tracks_40,
                interactive: true,
                title: '<img src="styles/legend/Oblong437tracks_40.png" /> Oblong437, tracks'
            });
var format_SpringSttracks_41 = new ol.format.GeoJSON();
var features_SpringSttracks_41 = format_SpringSttracks_41.readFeatures(json_SpringSttracks_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpringSttracks_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpringSttracks_41.addFeatures(features_SpringSttracks_41);
var lyr_SpringSttracks_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpringSttracks_41, 
                style: style_SpringSttracks_41,
                interactive: true,
                title: '<img src="styles/legend/SpringSttracks_41.png" /> SpringSt, tracks'
            });

lyr_Satellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Lines_2.setVisible(true);lyr_NotRealRoads_3.setVisible(true);lyr_NHoosacEofColetracks_4.setVisible(true);lyr_PetersburgRdtracks_5.setVisible(true);lyr_ColeOctopustracks_6.setVisible(true);lyr_Sprucestracks_7.setVisible(true);lyr_NWtoVTtracks_8.setVisible(true);lyr_Blairtracks_9.setVisible(true);lyr_PineCobbleDevtracks_10.setVisible(true);lyr_BulkleyNWMainOctotracks_11.setVisible(true);lyr_Idestracks_12.setVisible(true);lyr_Galetracks_13.setVisible(true);lyr_HendersonBrookSnadSpringtracks_14.setVisible(true);lyr_BeeHilltracks_15.setVisible(true);lyr_Luce1tracks_16.setVisible(true);lyr_Luce2tracks_17.setVisible(true);lyr_Syndicatetracks_18.setVisible(true);lyr_Rt7toVTtracks_19.setVisible(true);lyr_HamelRdtracks_20.setVisible(true);lyr_ChestnutCummingstracks_21.setVisible(true);lyr_McClainHarrisonBalloutracks_22.setVisible(true);lyr_ScottHillRdtracks_23.setVisible(true);lyr_OffStrattontracks_24.setVisible(true);lyr_CharlesSummerMayMasontracks_25.setVisible(true);lyr_WhiteOakstracks_26.setVisible(true);lyr_Woodcocktracks_27.setVisible(true);lyr_Thornliebanktracks_28.setVisible(true);lyr_MassAveSpurtracks_29.setVisible(true);lyr_SweetbrookStoneHilltracks_30.setVisible(true);lyr_Sabintracks_31.setVisible(true);lyr_CampusCleanUptracks_32.setVisible(true);lyr_FinishLyndetracks_33.setVisible(true);lyr_Rt2toNYtracks_34.setVisible(true);lyr_HopperPottertracks_35.setVisible(true);lyr_SloanOldMilltracks_36.setVisible(true);lyr_TreadwellHollowBerlinTorreyWoodstracks_37.setVisible(true);lyr_LinearParktracks_38.setVisible(true);lyr_RoaringBrooktracks_39.setVisible(true);lyr_Oblong437tracks_40.setVisible(true);lyr_SpringSttracks_41.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_OpenStreetMap_1,lyr_Lines_2,lyr_NotRealRoads_3,lyr_NHoosacEofColetracks_4,lyr_PetersburgRdtracks_5,lyr_ColeOctopustracks_6,lyr_Sprucestracks_7,lyr_NWtoVTtracks_8,lyr_Blairtracks_9,lyr_PineCobbleDevtracks_10,lyr_BulkleyNWMainOctotracks_11,lyr_Idestracks_12,lyr_Galetracks_13,lyr_HendersonBrookSnadSpringtracks_14,lyr_BeeHilltracks_15,lyr_Luce1tracks_16,lyr_Luce2tracks_17,lyr_Syndicatetracks_18,lyr_Rt7toVTtracks_19,lyr_HamelRdtracks_20,lyr_ChestnutCummingstracks_21,lyr_McClainHarrisonBalloutracks_22,lyr_ScottHillRdtracks_23,lyr_OffStrattontracks_24,lyr_CharlesSummerMayMasontracks_25,lyr_WhiteOakstracks_26,lyr_Woodcocktracks_27,lyr_Thornliebanktracks_28,lyr_MassAveSpurtracks_29,lyr_SweetbrookStoneHilltracks_30,lyr_Sabintracks_31,lyr_CampusCleanUptracks_32,lyr_FinishLyndetracks_33,lyr_Rt2toNYtracks_34,lyr_HopperPottertracks_35,lyr_SloanOldMilltracks_36,lyr_TreadwellHollowBerlinTorreyWoodstracks_37,lyr_LinearParktracks_38,lyr_RoaringBrooktracks_39,lyr_Oblong437tracks_40,lyr_SpringSttracks_41];
lyr_Lines_2.set('fieldAliases', {'fid': 'fid', });
lyr_NotRealRoads_3.set('fieldAliases', {'fid': 'fid', });
lyr_NHoosacEofColetracks_4.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_PetersburgRdtracks_5.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_ColeOctopustracks_6.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Sprucestracks_7.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_NWtoVTtracks_8.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Blairtracks_9.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_PineCobbleDevtracks_10.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_BulkleyNWMainOctotracks_11.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Idestracks_12.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Galetracks_13.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_HendersonBrookSnadSpringtracks_14.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_BeeHilltracks_15.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Luce1tracks_16.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Luce2tracks_17.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Syndicatetracks_18.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Rt7toVTtracks_19.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_HamelRdtracks_20.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_ChestnutCummingstracks_21.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_McClainHarrisonBalloutracks_22.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_ScottHillRdtracks_23.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_OffStrattontracks_24.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_CharlesSummerMayMasontracks_25.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_WhiteOakstracks_26.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Woodcocktracks_27.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Thornliebanktracks_28.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_MassAveSpurtracks_29.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_SweetbrookStoneHilltracks_30.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Sabintracks_31.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_CampusCleanUptracks_32.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_FinishLyndetracks_33.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Rt2toNYtracks_34.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_HopperPottertracks_35.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_SloanOldMilltracks_36.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_TreadwellHollowBerlinTorreyWoodstracks_37.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_LinearParktracks_38.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_RoaringBrooktracks_39.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Oblong437tracks_40.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_SpringSttracks_41.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Lines_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_NotRealRoads_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_NHoosacEofColetracks_4.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_PetersburgRdtracks_5.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_ColeOctopustracks_6.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Sprucestracks_7.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_NWtoVTtracks_8.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Blairtracks_9.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_PineCobbleDevtracks_10.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_BulkleyNWMainOctotracks_11.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Idestracks_12.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Galetracks_13.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_HendersonBrookSnadSpringtracks_14.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_BeeHilltracks_15.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Luce1tracks_16.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Luce2tracks_17.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Syndicatetracks_18.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Rt7toVTtracks_19.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_HamelRdtracks_20.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_ChestnutCummingstracks_21.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_McClainHarrisonBalloutracks_22.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_ScottHillRdtracks_23.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_OffStrattontracks_24.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_CharlesSummerMayMasontracks_25.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_WhiteOakstracks_26.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Woodcocktracks_27.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Thornliebanktracks_28.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_MassAveSpurtracks_29.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_SweetbrookStoneHilltracks_30.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Sabintracks_31.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_CampusCleanUptracks_32.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_FinishLyndetracks_33.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Rt2toNYtracks_34.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_HopperPottertracks_35.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_SloanOldMilltracks_36.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_TreadwellHollowBerlinTorreyWoodstracks_37.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_LinearParktracks_38.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_RoaringBrooktracks_39.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Oblong437tracks_40.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_SpringSttracks_41.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_Lines_2.set('fieldLabels', {'fid': 'no label', });
lyr_NotRealRoads_3.set('fieldLabels', {'fid': 'no label', });
lyr_NHoosacEofColetracks_4.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_PetersburgRdtracks_5.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_ColeOctopustracks_6.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Sprucestracks_7.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_NWtoVTtracks_8.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Blairtracks_9.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_PineCobbleDevtracks_10.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_BulkleyNWMainOctotracks_11.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Idestracks_12.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Galetracks_13.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_HendersonBrookSnadSpringtracks_14.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_BeeHilltracks_15.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Luce1tracks_16.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Luce2tracks_17.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Syndicatetracks_18.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Rt7toVTtracks_19.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_HamelRdtracks_20.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_ChestnutCummingstracks_21.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_McClainHarrisonBalloutracks_22.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_ScottHillRdtracks_23.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_OffStrattontracks_24.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_CharlesSummerMayMasontracks_25.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_WhiteOakstracks_26.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Woodcocktracks_27.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Thornliebanktracks_28.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_MassAveSpurtracks_29.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_SweetbrookStoneHilltracks_30.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Sabintracks_31.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_CampusCleanUptracks_32.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_FinishLyndetracks_33.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Rt2toNYtracks_34.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_HopperPottertracks_35.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_SloanOldMilltracks_36.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_TreadwellHollowBerlinTorreyWoodstracks_37.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_LinearParktracks_38.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_RoaringBrooktracks_39.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Oblong437tracks_40.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_SpringSttracks_41.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_SpringSttracks_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});