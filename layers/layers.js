var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satellite_1 = new ol.layer.Tile({
            'title': 'Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_WilliamstownBorder_2 = new ol.format.GeoJSON();
var features_WilliamstownBorder_2 = format_WilliamstownBorder_2.readFeatures(json_WilliamstownBorder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilliamstownBorder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilliamstownBorder_2.addFeatures(features_WilliamstownBorder_2);
var lyr_WilliamstownBorder_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilliamstownBorder_2, 
                style: style_WilliamstownBorder_2,
                interactive: true,
                title: '<img src="styles/legend/WilliamstownBorder_2.png" /> Williamstown Border'
            });
var format_January8_3 = new ol.format.GeoJSON();
var features_January8_3 = format_January8_3.readFeatures(json_January8_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January8_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January8_3.addFeatures(features_January8_3);
var lyr_January8_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January8_3, 
                style: style_January8_3,
                interactive: true,
                title: '<img src="styles/legend/January8_3.png" /> January 8'
            });
var format_January9_4 = new ol.format.GeoJSON();
var features_January9_4 = format_January9_4.readFeatures(json_January9_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January9_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January9_4.addFeatures(features_January9_4);
var lyr_January9_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January9_4, 
                style: style_January9_4,
                interactive: true,
                title: '<img src="styles/legend/January9_4.png" /> January 9'
            });
var format_January10_5 = new ol.format.GeoJSON();
var features_January10_5 = format_January10_5.readFeatures(json_January10_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January10_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January10_5.addFeatures(features_January10_5);
var lyr_January10_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January10_5, 
                style: style_January10_5,
                interactive: true,
                title: '<img src="styles/legend/January10_5.png" /> January 10'
            });
var format_January12_6 = new ol.format.GeoJSON();
var features_January12_6 = format_January12_6.readFeatures(json_January12_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January12_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January12_6.addFeatures(features_January12_6);
var lyr_January12_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January12_6, 
                style: style_January12_6,
                interactive: true,
                title: '<img src="styles/legend/January12_6.png" /> January 12'
            });
var format_January14_7 = new ol.format.GeoJSON();
var features_January14_7 = format_January14_7.readFeatures(json_January14_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January14_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January14_7.addFeatures(features_January14_7);
var lyr_January14_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January14_7, 
                style: style_January14_7,
                interactive: true,
                title: '<img src="styles/legend/January14_7.png" /> January 14'
            });
var format_January15_8 = new ol.format.GeoJSON();
var features_January15_8 = format_January15_8.readFeatures(json_January15_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January15_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January15_8.addFeatures(features_January15_8);
var lyr_January15_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January15_8, 
                style: style_January15_8,
                interactive: true,
                title: '<img src="styles/legend/January15_8.png" /> January 15'
            });
var format_January17_9 = new ol.format.GeoJSON();
var features_January17_9 = format_January17_9.readFeatures(json_January17_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January17_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January17_9.addFeatures(features_January17_9);
var lyr_January17_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January17_9, 
                style: style_January17_9,
                interactive: true,
                title: '<img src="styles/legend/January17_9.png" /> January 17'
            });
var format_January18_10 = new ol.format.GeoJSON();
var features_January18_10 = format_January18_10.readFeatures(json_January18_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January18_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January18_10.addFeatures(features_January18_10);
var lyr_January18_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January18_10, 
                style: style_January18_10,
                interactive: true,
                title: '<img src="styles/legend/January18_10.png" /> January 18'
            });
var format_January19_11 = new ol.format.GeoJSON();
var features_January19_11 = format_January19_11.readFeatures(json_January19_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January19_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January19_11.addFeatures(features_January19_11);
var lyr_January19_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January19_11, 
                style: style_January19_11,
                interactive: true,
                title: '<img src="styles/legend/January19_11.png" /> January 19'
            });
var format_January21_12 = new ol.format.GeoJSON();
var features_January21_12 = format_January21_12.readFeatures(json_January21_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January21_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January21_12.addFeatures(features_January21_12);
var lyr_January21_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January21_12, 
                style: style_January21_12,
                interactive: true,
                title: '<img src="styles/legend/January21_12.png" /> January 21'
            });
var format_January22_13 = new ol.format.GeoJSON();
var features_January22_13 = format_January22_13.readFeatures(json_January22_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_January22_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_January22_13.addFeatures(features_January22_13);
var lyr_January22_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_January22_13, 
                style: style_January22_13,
                interactive: true,
                title: '<img src="styles/legend/January22_13.png" /> January 22'
            });
var format_February2_14 = new ol.format.GeoJSON();
var features_February2_14 = format_February2_14.readFeatures(json_February2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February2_14.addFeatures(features_February2_14);
var lyr_February2_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February2_14, 
                style: style_February2_14,
                interactive: true,
                title: '<img src="styles/legend/February2_14.png" /> February 2'
            });
var format_February5_15 = new ol.format.GeoJSON();
var features_February5_15 = format_February5_15.readFeatures(json_February5_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February5_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February5_15.addFeatures(features_February5_15);
var lyr_February5_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February5_15, 
                style: style_February5_15,
                interactive: true,
                title: '<img src="styles/legend/February5_15.png" /> February 5'
            });
var format_February8_16 = new ol.format.GeoJSON();
var features_February8_16 = format_February8_16.readFeatures(json_February8_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February8_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February8_16.addFeatures(features_February8_16);
var lyr_February8_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February8_16, 
                style: style_February8_16,
                interactive: true,
                title: '<img src="styles/legend/February8_16.png" /> February 8'
            });
var format_February11_17 = new ol.format.GeoJSON();
var features_February11_17 = format_February11_17.readFeatures(json_February11_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February11_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February11_17.addFeatures(features_February11_17);
var lyr_February11_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February11_17, 
                style: style_February11_17,
                interactive: true,
                title: '<img src="styles/legend/February11_17.png" /> February 11'
            });
var format_February13_18 = new ol.format.GeoJSON();
var features_February13_18 = format_February13_18.readFeatures(json_February13_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February13_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February13_18.addFeatures(features_February13_18);
var lyr_February13_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February13_18, 
                style: style_February13_18,
                interactive: true,
                title: '<img src="styles/legend/February13_18.png" /> February 13'
            });
var format_February15_19 = new ol.format.GeoJSON();
var features_February15_19 = format_February15_19.readFeatures(json_February15_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February15_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February15_19.addFeatures(features_February15_19);
var lyr_February15_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February15_19, 
                style: style_February15_19,
                interactive: true,
                title: '<img src="styles/legend/February15_19.png" /> February 15'
            });
var format_February16_20 = new ol.format.GeoJSON();
var features_February16_20 = format_February16_20.readFeatures(json_February16_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February16_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February16_20.addFeatures(features_February16_20);
var lyr_February16_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February16_20, 
                style: style_February16_20,
                interactive: true,
                title: '<img src="styles/legend/February16_20.png" /> February 16'
            });
var format_February18_21 = new ol.format.GeoJSON();
var features_February18_21 = format_February18_21.readFeatures(json_February18_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February18_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February18_21.addFeatures(features_February18_21);
var lyr_February18_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February18_21, 
                style: style_February18_21,
                interactive: true,
                title: '<img src="styles/legend/February18_21.png" /> February 18'
            });
var format_February19_22 = new ol.format.GeoJSON();
var features_February19_22 = format_February19_22.readFeatures(json_February19_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February19_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February19_22.addFeatures(features_February19_22);
var lyr_February19_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February19_22, 
                style: style_February19_22,
                interactive: true,
                title: '<img src="styles/legend/February19_22.png" /> February 19'
            });
var format_February21_23 = new ol.format.GeoJSON();
var features_February21_23 = format_February21_23.readFeatures(json_February21_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February21_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February21_23.addFeatures(features_February21_23);
var lyr_February21_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February21_23, 
                style: style_February21_23,
                interactive: true,
                title: '<img src="styles/legend/February21_23.png" /> February 21'
            });
var format_February24_24 = new ol.format.GeoJSON();
var features_February24_24 = format_February24_24.readFeatures(json_February24_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February24_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February24_24.addFeatures(features_February24_24);
var lyr_February24_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February24_24, 
                style: style_February24_24,
                interactive: true,
                title: '<img src="styles/legend/February24_24.png" /> February 24'
            });
var format_February26_25 = new ol.format.GeoJSON();
var features_February26_25 = format_February26_25.readFeatures(json_February26_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_February26_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_February26_25.addFeatures(features_February26_25);
var lyr_February26_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_February26_25, 
                style: style_February26_25,
                interactive: true,
                title: '<img src="styles/legend/February26_25.png" /> February 26'
            });
var format_March1_26 = new ol.format.GeoJSON();
var features_March1_26 = format_March1_26.readFeatures(json_March1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_March1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_March1_26.addFeatures(features_March1_26);
var lyr_March1_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_March1_26, 
                style: style_March1_26,
                interactive: true,
                title: '<img src="styles/legend/March1_26.png" /> March 1'
            });
var format_March6_27 = new ol.format.GeoJSON();
var features_March6_27 = format_March6_27.readFeatures(json_March6_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_March6_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_March6_27.addFeatures(features_March6_27);
var lyr_March6_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_March6_27, 
                style: style_March6_27,
                interactive: true,
                title: '<img src="styles/legend/March6_27.png" /> March 6'
            });
var format_March11_28 = new ol.format.GeoJSON();
var features_March11_28 = format_March11_28.readFeatures(json_March11_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_March11_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_March11_28.addFeatures(features_March11_28);
var lyr_March11_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_March11_28, 
                style: style_March11_28,
                interactive: true,
                title: '<img src="styles/legend/March11_28.png" /> March 11'
            });
var format_April8_29 = new ol.format.GeoJSON();
var features_April8_29 = format_April8_29.readFeatures(json_April8_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April8_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April8_29.addFeatures(features_April8_29);
var lyr_April8_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April8_29, 
                style: style_April8_29,
                interactive: true,
                title: '<img src="styles/legend/April8_29.png" /> April 8'
            });
var format_April10_30 = new ol.format.GeoJSON();
var features_April10_30 = format_April10_30.readFeatures(json_April10_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April10_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April10_30.addFeatures(features_April10_30);
var lyr_April10_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April10_30, 
                style: style_April10_30,
                interactive: true,
                title: '<img src="styles/legend/April10_30.png" /> April 10'
            });
var format_April12_31 = new ol.format.GeoJSON();
var features_April12_31 = format_April12_31.readFeatures(json_April12_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April12_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April12_31.addFeatures(features_April12_31);
var lyr_April12_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April12_31, 
                style: style_April12_31,
                interactive: true,
                title: '<img src="styles/legend/April12_31.png" /> April 12'
            });
var format_April16_32 = new ol.format.GeoJSON();
var features_April16_32 = format_April16_32.readFeatures(json_April16_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April16_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April16_32.addFeatures(features_April16_32);
var lyr_April16_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April16_32, 
                style: style_April16_32,
                interactive: true,
                title: '<img src="styles/legend/April16_32.png" /> April 16'
            });
var format_April22_33 = new ol.format.GeoJSON();
var features_April22_33 = format_April22_33.readFeatures(json_April22_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April22_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April22_33.addFeatures(features_April22_33);
var lyr_April22_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April22_33, 
                style: style_April22_33,
                interactive: true,
                title: '<img src="styles/legend/April22_33.png" /> April 22'
            });
var format_April25_34 = new ol.format.GeoJSON();
var features_April25_34 = format_April25_34.readFeatures(json_April25_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April25_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April25_34.addFeatures(features_April25_34);
var lyr_April25_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April25_34, 
                style: style_April25_34,
                interactive: true,
                title: '<img src="styles/legend/April25_34.png" /> April 25'
            });
var format_April26_35 = new ol.format.GeoJSON();
var features_April26_35 = format_April26_35.readFeatures(json_April26_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April26_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April26_35.addFeatures(features_April26_35);
var lyr_April26_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April26_35, 
                style: style_April26_35,
                interactive: true,
                title: '<img src="styles/legend/April26_35.png" /> April 26'
            });
var format_April30_36 = new ol.format.GeoJSON();
var features_April30_36 = format_April30_36.readFeatures(json_April30_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April30_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April30_36.addFeatures(features_April30_36);
var lyr_April30_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_April30_36, 
                style: style_April30_36,
                interactive: true,
                title: '<img src="styles/legend/April30_36.png" /> April 30'
            });
var format_May5_37 = new ol.format.GeoJSON();
var features_May5_37 = format_May5_37.readFeatures(json_May5_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_May5_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_May5_37.addFeatures(features_May5_37);
var lyr_May5_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_May5_37, 
                style: style_May5_37,
                interactive: true,
                title: '<img src="styles/legend/May5_37.png" /> May 5'
            });
var format_May7_38 = new ol.format.GeoJSON();
var features_May7_38 = format_May7_38.readFeatures(json_May7_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_May7_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_May7_38.addFeatures(features_May7_38);
var lyr_May7_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_May7_38, 
                style: style_May7_38,
                interactive: true,
                title: '<img src="styles/legend/May7_38.png" /> May 7'
            });
var format_May11_39 = new ol.format.GeoJSON();
var features_May11_39 = format_May11_39.readFeatures(json_May11_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_May11_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_May11_39.addFeatures(features_May11_39);
var lyr_May11_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_May11_39, 
                style: style_May11_39,
                interactive: true,
                title: '<img src="styles/legend/May11_39.png" /> May 11'
            });
var format_May13_40 = new ol.format.GeoJSON();
var features_May13_40 = format_May13_40.readFeatures(json_May13_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_May13_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_May13_40.addFeatures(features_May13_40);
var lyr_May13_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_May13_40, 
                style: style_May13_40,
                interactive: true,
                title: '<img src="styles/legend/May13_40.png" /> May 13'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satellite_1.setVisible(true);lyr_WilliamstownBorder_2.setVisible(true);lyr_January8_3.setVisible(true);lyr_January9_4.setVisible(true);lyr_January10_5.setVisible(true);lyr_January12_6.setVisible(true);lyr_January14_7.setVisible(true);lyr_January15_8.setVisible(true);lyr_January17_9.setVisible(true);lyr_January18_10.setVisible(true);lyr_January19_11.setVisible(true);lyr_January21_12.setVisible(true);lyr_January22_13.setVisible(true);lyr_February2_14.setVisible(true);lyr_February5_15.setVisible(true);lyr_February8_16.setVisible(true);lyr_February11_17.setVisible(true);lyr_February13_18.setVisible(true);lyr_February15_19.setVisible(true);lyr_February16_20.setVisible(true);lyr_February18_21.setVisible(true);lyr_February19_22.setVisible(true);lyr_February21_23.setVisible(true);lyr_February24_24.setVisible(true);lyr_February26_25.setVisible(true);lyr_March1_26.setVisible(true);lyr_March6_27.setVisible(true);lyr_March11_28.setVisible(true);lyr_April8_29.setVisible(true);lyr_April10_30.setVisible(true);lyr_April12_31.setVisible(true);lyr_April16_32.setVisible(true);lyr_April22_33.setVisible(true);lyr_April25_34.setVisible(true);lyr_April26_35.setVisible(true);lyr_April30_36.setVisible(true);lyr_May5_37.setVisible(true);lyr_May7_38.setVisible(true);lyr_May11_39.setVisible(true);lyr_May13_40.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satellite_1,lyr_WilliamstownBorder_2,lyr_January8_3,lyr_January9_4,lyr_January10_5,lyr_January12_6,lyr_January14_7,lyr_January15_8,lyr_January17_9,lyr_January18_10,lyr_January19_11,lyr_January21_12,lyr_January22_13,lyr_February2_14,lyr_February5_15,lyr_February8_16,lyr_February11_17,lyr_February13_18,lyr_February15_19,lyr_February16_20,lyr_February18_21,lyr_February19_22,lyr_February21_23,lyr_February24_24,lyr_February26_25,lyr_March1_26,lyr_March6_27,lyr_March11_28,lyr_April8_29,lyr_April10_30,lyr_April12_31,lyr_April16_32,lyr_April22_33,lyr_April25_34,lyr_April26_35,lyr_April30_36,lyr_May5_37,lyr_May7_38,lyr_May11_39,lyr_May13_40];
lyr_WilliamstownBorder_2.set('fieldAliases', {});
lyr_January8_3.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January9_4.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', });
lyr_January10_5.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January12_6.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January14_7.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January15_8.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January17_9.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January18_10.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January19_11.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January21_12.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_January22_13.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February2_14.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February5_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_February8_16.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February11_17.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', });
lyr_February13_18.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February15_19.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February16_20.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February18_21.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February19_22.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February21_23.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February24_24.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_February26_25.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_March1_26.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_March6_27.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_March11_28.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April8_29.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April10_30.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', 'Layer_Name': 'Layer_Name', });
lyr_April12_31.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April16_32.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April22_33.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April25_34.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April26_35.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_April30_36.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_May5_37.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_May7_38.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_May11_39.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_May13_40.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_WilliamstownBorder_2.set('fieldImages', {});
lyr_January8_3.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January9_4.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', });
lyr_January10_5.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January12_6.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January14_7.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January15_8.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January17_9.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January18_10.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January19_11.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January21_12.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_January22_13.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February2_14.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February5_15.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_February8_16.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February11_17.set('fieldImages', {'qc_id': '', 'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', });
lyr_February13_18.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February15_19.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February16_20.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February18_21.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February19_22.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February21_23.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February24_24.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_February26_25.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_March1_26.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_March6_27.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_March11_28.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April8_29.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April10_30.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', 'Layer_Name': '', });
lyr_April12_31.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April16_32.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April22_33.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April25_34.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April26_35.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_April30_36.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_May5_37.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_May7_38.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_May11_39.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_May13_40.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_WilliamstownBorder_2.set('fieldLabels', {});
lyr_January8_3.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January9_4.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', });
lyr_January10_5.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January12_6.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January14_7.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January15_8.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January17_9.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January18_10.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January19_11.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January21_12.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_January22_13.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February2_14.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February5_15.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_February8_16.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February11_17.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', });
lyr_February13_18.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February15_19.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February16_20.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February18_21.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February19_22.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February21_23.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February24_24.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_February26_25.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_March1_26.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_March6_27.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_March11_28.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April8_29.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April10_30.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', 'Layer_Name': 'no label', });
lyr_April12_31.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April16_32.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April22_33.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April25_34.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April26_35.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_April30_36.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_May5_37.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'inline label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_May7_38.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_May11_39.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_May13_40.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_May13_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});