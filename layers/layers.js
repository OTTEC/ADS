var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_PETRduPaysdeBray_1 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_1 = format_PETRduPaysdeBray_1.readFeatures(json_PETRduPaysdeBray_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_1.addFeatures(features_PETRduPaysdeBray_1);
var lyr_PETRduPaysdeBray_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_1, 
                style: style_PETRduPaysdeBray_1,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_1.png" /> PETR du Pays de Bray'
            });
var format_Secteurs_2 = new ol.format.GeoJSON();
var features_Secteurs_2 = format_Secteurs_2.readFeatures(json_Secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_2.addFeatures(features_Secteurs_2);
var lyr_Secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_2, 
                style: style_Secteurs_2,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_2_0.png" /> Secteur d ac<br />\
    <img src="styles/legend/Secteurs_2_1.png" /> Secteur natu<br />\
    <img src="styles/legend/Secteurs_2_2.png" /> Secteur urba<br />' });
var format_Secteurs_3 = new ol.format.GeoJSON();
var features_Secteurs_3 = format_Secteurs_3.readFeatures(json_Secteurs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_3.addFeatures(features_Secteurs_3);
var lyr_Secteurs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_3, 
                style: style_Secteurs_3,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_3_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_3_1.png" /> Ah<br />\
    <img src="styles/legend/Secteurs_3_2.png" /> AU<br />\
    <img src="styles/legend/Secteurs_3_3.png" /> N<br />\
    <img src="styles/legend/Secteurs_3_4.png" /> Nh<br />\
    <img src="styles/legend/Secteurs_3_5.png" /> Ny<br />\
    <img src="styles/legend/Secteurs_3_6.png" /> Uc<br />\
    <img src="styles/legend/Secteurs_3_7.png" /> Uh<br />' });
var format_Prescriptionssurfaciques_4 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_4 = format_Prescriptionssurfaciques_4.readFeatures(json_Prescriptionssurfaciques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_4.addFeatures(features_Prescriptionssurfaciques_4);
var lyr_Prescriptionssurfaciques_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_4, 
                style: style_Prescriptionssurfaciques_4,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_0.png" /> Cheminement doux<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_1.png" /> Cheminement doux et passerelle au dessus de l\'Andelle<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_2.png" /> Cheminement doux le long de l\'Andelle<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_3.png" /> Espace boisé classé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_4.png" /> Espace soumis à un risque d\'effondrement de cavité souterraine<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_5.png" /> Espace soumis à un risque d\'inondation<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_6.png" /> Périmètre éloigné de captage<br />\
    <img src="styles/legend/Prescriptionssurfaciques_4_7.png" /> Périmètre rapproché de captage<br />' });
var format_Prescriptionslinaires_5 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_5 = format_Prescriptionslinaires_5.readFeatures(json_Prescriptionslinaires_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_5.addFeatures(features_Prescriptionslinaires_5);
var lyr_Prescriptionslinaires_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_5, 
                style: style_Prescriptionslinaires_5,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_5_0.png" /> Alignement d\'arbres à protéger au titre des espaces boisés classés<br />\
    <img src="styles/legend/Prescriptionslinaires_5_1.png" /> Alignement d\'arbres à protéger au titre du 7eme alinéa art 123-1-5<br />' });
var format_Prescriptionsponctuelles_6 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_6 = format_Prescriptionsponctuelles_6.readFeatures(json_Prescriptionsponctuelles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_6.addFeatures(features_Prescriptionsponctuelles_6);
var lyr_Prescriptionsponctuelles_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_6, 
                style: style_Prescriptionsponctuelles_6,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_6_0.png" /> Bâtiment agricole pouvant changer de destination (Art L123-3-1 code urbanisme)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_6_1.png" /> Bâtiment interessant à protéger (7eme alinéa de l\'article L123-1-5)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_6_2.png" /> Bâtiment remarquable (7eme alinéa de l\'article L123-1-5)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_6_3.png" /> Mares à protéger (7eme alinéa de l\'article L123-1-5)<br />' });
var format_Codessecteurs_7 = new ol.format.GeoJSON();
var features_Codessecteurs_7 = format_Codessecteurs_7.readFeatures(json_Codessecteurs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_7.addFeatures(features_Codessecteurs_7);
var lyr_Codessecteurs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_7, 
                style: style_Codessecteurs_7,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_8 = new ol.format.GeoJSON();
var features_Secteurs_8 = format_Secteurs_8.readFeatures(json_Secteurs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_8.addFeatures(features_Secteurs_8);
var lyr_Secteurs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_8, 
                style: style_Secteurs_8,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_8_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_8_1.png" /> SU<br />' });
var format_Codessecteurs_9 = new ol.format.GeoJSON();
var features_Codessecteurs_9 = format_Codessecteurs_9.readFeatures(json_Codessecteurs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_9.addFeatures(features_Codessecteurs_9);
var lyr_Codessecteurs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_9, 
                style: style_Codessecteurs_9,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_10 = new ol.format.GeoJSON();
var features_Secteurs_10 = format_Secteurs_10.readFeatures(json_Secteurs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_10.addFeatures(features_Secteurs_10);
var lyr_Secteurs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_10, 
                style: style_Secteurs_10,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_10_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_10_1.png" /> An<br />\
    <img src="styles/legend/Secteurs_10_2.png" /> AUh1<br />\
    <img src="styles/legend/Secteurs_10_3.png" /> AUh2<br />\
    <img src="styles/legend/Secteurs_10_4.png" /> AUz<br />\
    <img src="styles/legend/Secteurs_10_5.png" /> N<br />\
    <img src="styles/legend/Secteurs_10_6.png" /> Ng<br />\
    <img src="styles/legend/Secteurs_10_7.png" /> Ngs<br />\
    <img src="styles/legend/Secteurs_10_8.png" /> Uca<br />\
    <img src="styles/legend/Secteurs_10_9.png" /> Ucc<br />\
    <img src="styles/legend/Secteurs_10_10.png" /> Ud<br />\
    <img src="styles/legend/Secteurs_10_11.png" /> Uh<br />\
    <img src="styles/legend/Secteurs_10_12.png" /> Us<br />\
    <img src="styles/legend/Secteurs_10_13.png" /> Uy<br />\
    <img src="styles/legend/Secteurs_10_14.png" /> Uz<br />' });
var format_Prescriptionssurfaciques_11 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_11 = format_Prescriptionssurfaciques_11.readFeatures(json_Prescriptionssurfaciques_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_11.addFeatures(features_Prescriptionssurfaciques_11);
var lyr_Prescriptionssurfaciques_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_11, 
                style: style_Prescriptionssurfaciques_11,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_0.png" /> Bâtiment susceptible de changer de destination en zone A ou N<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_1.png" /> Construction remarquable protégée au titre du L151-19 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_2.png" /> Emplacement réservé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_3.png" /> Enveloppe des zones inondées par une crue de la Varenne<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_4.png" /> Espace boisé classé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_5.png" /> Mare protégée au titre du L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_6.png" /> Polygone d\'implantation<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_7.png" /> Risque d\'effondrement de cavité<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_8.png" /> Verger protégé au titre du L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_9.png" /> Zone humide protégée au titre du L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_11_10.png" /> Zone située en zone inondable ou traversée par un axe d\'écoulement majeur<br />' });
var format_Primtresdeprotectiondecaptage_12 = new ol.format.GeoJSON();
var features_Primtresdeprotectiondecaptage_12 = format_Primtresdeprotectiondecaptage_12.readFeatures(json_Primtresdeprotectiondecaptage_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtresdeprotectiondecaptage_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtresdeprotectiondecaptage_12.addFeatures(features_Primtresdeprotectiondecaptage_12);
var lyr_Primtresdeprotectiondecaptage_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtresdeprotectiondecaptage_12, 
                style: style_Primtresdeprotectiondecaptage_12,
                popuplayertitle: 'Périmètres de protection de captage',
                interactive: true,
    title: 'Périmètres de protection de captage<br />\
    <img src="styles/legend/Primtresdeprotectiondecaptage_12_0.png" /> Périmètre protection éloigné captage<br />\
    <img src="styles/legend/Primtresdeprotectiondecaptage_12_1.png" /> Périmètre protection rapproché captage<br />' });
var format_Prescriptionslinaires_13 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_13 = format_Prescriptionslinaires_13.readFeatures(json_Prescriptionslinaires_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_13.addFeatures(features_Prescriptionslinaires_13);
var lyr_Prescriptionslinaires_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_13, 
                style: style_Prescriptionslinaires_13,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_13_0.png" /> Alignement d\'arbres protégé au titre du L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_13_1.png" /> Espace boisé classé<br />\
    <img src="styles/legend/Prescriptionslinaires_13_2.png" /> Front bâti remarquable protégée au titre du L151-19 CU<br />' });
var format_Ruissellement_14 = new ol.format.GeoJSON();
var features_Ruissellement_14 = format_Ruissellement_14.readFeatures(json_Ruissellement_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruissellement_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruissellement_14.addFeatures(features_Ruissellement_14);
var lyr_Ruissellement_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruissellement_14, 
                style: style_Ruissellement_14,
                popuplayertitle: 'Ruissellement',
                interactive: true,
    title: 'Ruissellement<br />\
    <img src="styles/legend/Ruissellement_14_0.png" /> Aléa ruissellement fort sur voirie<br />\
    <img src="styles/legend/Ruissellement_14_1.png" /> Aléa ruissellement moyen sur voirie<br />\
    <img src="styles/legend/Ruissellement_14_2.png" /> Aléa ruissellement très fort sur voirie<br />' });
var format_Prescriptionsponctuelles_15 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_15 = format_Prescriptionsponctuelles_15.readFeatures(json_Prescriptionsponctuelles_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_15.addFeatures(features_Prescriptionsponctuelles_15);
var lyr_Prescriptionsponctuelles_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_15, 
                style: style_Prescriptionsponctuelles_15,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_15_0.png" /> Espace boisé classé<br />' });
var format_Codessecteurs_16 = new ol.format.GeoJSON();
var features_Codessecteurs_16 = format_Codessecteurs_16.readFeatures(json_Codessecteurs_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_16.addFeatures(features_Codessecteurs_16);
var lyr_Codessecteurs_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_16, 
                style: style_Codessecteurs_16,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_17 = new ol.format.GeoJSON();
var features_Secteurs_17 = format_Secteurs_17.readFeatures(json_Secteurs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_17.addFeatures(features_Secteurs_17);
var lyr_Secteurs_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_17, 
                style: style_Secteurs_17,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_17_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_17_1.png" /> SU<br />' });
var format_Codessecteurs_18 = new ol.format.GeoJSON();
var features_Codessecteurs_18 = format_Codessecteurs_18.readFeatures(json_Codessecteurs_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_18.addFeatures(features_Codessecteurs_18);
var lyr_Codessecteurs_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_18, 
                style: style_Codessecteurs_18,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_19 = new ol.format.GeoJSON();
var features_Secteurs_19 = format_Secteurs_19.readFeatures(json_Secteurs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_19.addFeatures(features_Secteurs_19);
var lyr_Secteurs_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_19, 
                style: style_Secteurs_19,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_19_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_19_1.png" /> SU<br />' });
var format_Codessecteurs_20 = new ol.format.GeoJSON();
var features_Codessecteurs_20 = format_Codessecteurs_20.readFeatures(json_Codessecteurs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_20.addFeatures(features_Codessecteurs_20);
var lyr_Codessecteurs_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_20, 
                style: style_Codessecteurs_20,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_21 = new ol.format.GeoJSON();
var features_Secteurs_21 = format_Secteurs_21.readFeatures(json_Secteurs_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_21.addFeatures(features_Secteurs_21);
var lyr_Secteurs_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_21, 
                style: style_Secteurs_21,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_21_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_21_1.png" /> Ah<br />\
    <img src="styles/legend/Secteurs_21_2.png" /> N<br />\
    <img src="styles/legend/Secteurs_21_3.png" /> Uh<br />' });
var format_Prescriptionssurfaciques_22 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_22 = format_Prescriptionssurfaciques_22.readFeatures(json_Prescriptionssurfaciques_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_22.addFeatures(features_Prescriptionssurfaciques_22);
var lyr_Prescriptionssurfaciques_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_22, 
                style: style_Prescriptionssurfaciques_22,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_22_0.png" /> Espace boisé classé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_22_1.png" /> Espace soumis à un risque d\'effondrement de cavité souterraine<br />\
    <img src="styles/legend/Prescriptionssurfaciques_22_2.png" /> Espace soumis à un risque d\'inondation<br />' });
var format_Prescriptionslinaires_23 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_23 = format_Prescriptionslinaires_23.readFeatures(json_Prescriptionslinaires_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_23.addFeatures(features_Prescriptionslinaires_23);
var lyr_Prescriptionslinaires_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_23, 
                style: style_Prescriptionslinaires_23,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_23_0.png" /> Alignement d\'arbres à protéger au titre des espaces boisés classés<br />\
    <img src="styles/legend/Prescriptionslinaires_23_1.png" /> Alignement d\'arbres à protéger au titre du 7eme alinéa de l\'article L123-1-5<br />' });
var format_Prescriptionsponctuelles_24 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_24 = format_Prescriptionsponctuelles_24.readFeatures(json_Prescriptionsponctuelles_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_24.addFeatures(features_Prescriptionsponctuelles_24);
var lyr_Prescriptionsponctuelles_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_24, 
                style: style_Prescriptionsponctuelles_24,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_24_0.png" /> Bâtiment agricole pouvant changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_24_1.png" /> Bâtiment intéressant à protéger<br />\
    <img src="styles/legend/Prescriptionsponctuelles_24_2.png" /> Bâtiment remarquable à protéger<br />\
    <img src="styles/legend/Prescriptionsponctuelles_24_3.png" /> Mare à protéger<br />' });
var format_Codessecteurs_25 = new ol.format.GeoJSON();
var features_Codessecteurs_25 = format_Codessecteurs_25.readFeatures(json_Codessecteurs_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_25.addFeatures(features_Codessecteurs_25);
var lyr_Codessecteurs_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_25, 
                style: style_Codessecteurs_25,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_26 = new ol.format.GeoJSON();
var features_Secteurs_26 = format_Secteurs_26.readFeatures(json_Secteurs_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_26.addFeatures(features_Secteurs_26);
var lyr_Secteurs_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_26, 
                style: style_Secteurs_26,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_26_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_26_1.png" /> SC<br />' });
var format_Boisprotgs_27 = new ol.format.GeoJSON();
var features_Boisprotgs_27 = format_Boisprotgs_27.readFeatures(json_Boisprotgs_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boisprotgs_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boisprotgs_27.addFeatures(features_Boisprotgs_27);
var lyr_Boisprotgs_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boisprotgs_27, 
                style: style_Boisprotgs_27,
                popuplayertitle: 'Bois protégés',
                interactive: true,
                title: '<img src="styles/legend/Boisprotgs_27.png" /> Bois protégés'
            });
var format_Codessecteurs_28 = new ol.format.GeoJSON();
var features_Codessecteurs_28 = format_Codessecteurs_28.readFeatures(json_Codessecteurs_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_28.addFeatures(features_Codessecteurs_28);
var lyr_Codessecteurs_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_28, 
                style: style_Codessecteurs_28,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_29 = new ol.format.GeoJSON();
var features_Secteurs_29 = format_Secteurs_29.readFeatures(json_Secteurs_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_29.addFeatures(features_Secteurs_29);
var lyr_Secteurs_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_29, 
                style: style_Secteurs_29,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_29_0.png" /> C<br />\
    <img src="styles/legend/Secteurs_29_1.png" /> NC<br />' });
var format_Prescriptionssurfaciques_30 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_30 = format_Prescriptionssurfaciques_30.readFeatures(json_Prescriptionssurfaciques_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_30.addFeatures(features_Prescriptionssurfaciques_30);
var lyr_Prescriptionssurfaciques_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_30, 
                style: style_Prescriptionssurfaciques_30,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_30_0.png" /> Périmètre de protection lié à la présence d\'axe de ruissellement<br />\
    <img src="styles/legend/Prescriptionssurfaciques_30_1.png" /> Périmètre de sécurité lié à la présence d\'un indice de cavités souterraines<br />\
    <img src="styles/legend/Prescriptionssurfaciques_30_2.png" /> Zones inondables<br />' });
var format_Codessecteurs_31 = new ol.format.GeoJSON();
var features_Codessecteurs_31 = format_Codessecteurs_31.readFeatures(json_Codessecteurs_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_31.addFeatures(features_Codessecteurs_31);
var lyr_Codessecteurs_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_31, 
                style: style_Codessecteurs_31,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_32 = new ol.format.GeoJSON();
var features_Secteurs_32 = format_Secteurs_32.readFeatures(json_Secteurs_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_32.addFeatures(features_Secteurs_32);
var lyr_Secteurs_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_32, 
                style: style_Secteurs_32,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_32_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_32_1.png" /> N<br />\
    <img src="styles/legend/Secteurs_32_2.png" /> UH<br />\
    <img src="styles/legend/Secteurs_32_3.png" /> UR<br />' });
var format_Prescriptionssurfaciques_33 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_33 = format_Prescriptionssurfaciques_33.readFeatures(json_Prescriptionssurfaciques_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_33.addFeatures(features_Prescriptionssurfaciques_33);
var lyr_Prescriptionssurfaciques_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_33, 
                style: style_Prescriptionssurfaciques_33,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_0.png" /> Berges de la Béthune à protéger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_1.png" /> Emplacements réservés<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_2.png" /> Espaces Boisés Classés à protéger, à conserver<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_3.png" /> Périmetres relatifs au risque d\'effondrement lié à la présence de cavités souterraines<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_4.png" /> Secteurs comportant des orientations d\'Aménagement et de Programmation<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_5.png" /> Zone inondable d\'aléa fort issue du SGEP<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_6.png" /> Zone inondable d\'aléa moyen issue du SGEP<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_7.png" /> Zones expansion des axes de ruissellement des eaux pluviales<br />\
    <img src="styles/legend/Prescriptionssurfaciques_33_8.png" /> Zones humides à préserver<br />' });
var format_Prescriptionslinaires_34 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_34 = format_Prescriptionslinaires_34.readFeatures(json_Prescriptionslinaires_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_34.addFeatures(features_Prescriptionslinaires_34);
var lyr_Prescriptionslinaires_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_34, 
                style: style_Prescriptionslinaires_34,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_34_0.png" /> Axes de ruissellement des eaux pluviales<br />\
    <img src="styles/legend/Prescriptionslinaires_34_1.png" /> Haies et alignements boisés à protéger<br />' });
var format_Prescriptionsponctuelles_35 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_35 = format_Prescriptionsponctuelles_35.readFeatures(json_Prescriptionsponctuelles_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_35.addFeatures(features_Prescriptionsponctuelles_35);
var lyr_Prescriptionsponctuelles_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_35, 
                style: style_Prescriptionsponctuelles_35,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
                title: '<img src="styles/legend/Prescriptionsponctuelles_35.png" /> Prescriptions ponctuelles'
            });
var format_Codessecteurs_36 = new ol.format.GeoJSON();
var features_Codessecteurs_36 = format_Codessecteurs_36.readFeatures(json_Codessecteurs_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_36.addFeatures(features_Codessecteurs_36);
var lyr_Codessecteurs_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_36, 
                style: style_Codessecteurs_36,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_37 = new ol.format.GeoJSON();
var features_Secteurs_37 = format_Secteurs_37.readFeatures(json_Secteurs_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_37.addFeatures(features_Secteurs_37);
var lyr_Secteurs_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_37, 
                style: style_Secteurs_37,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_37_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_37_1.png" /> SC<br />' });
var format_Codessecteurs_38 = new ol.format.GeoJSON();
var features_Codessecteurs_38 = format_Codessecteurs_38.readFeatures(json_Codessecteurs_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_38.addFeatures(features_Codessecteurs_38);
var lyr_Codessecteurs_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_38, 
                style: style_Codessecteurs_38,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_39 = new ol.format.GeoJSON();
var features_Secteurs_39 = format_Secteurs_39.readFeatures(json_Secteurs_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_39.addFeatures(features_Secteurs_39);
var lyr_Secteurs_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_39, 
                style: style_Secteurs_39,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_39_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_39_1.png" /> SU<br />' });
var format_Codessecteurs_40 = new ol.format.GeoJSON();
var features_Codessecteurs_40 = format_Codessecteurs_40.readFeatures(json_Codessecteurs_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_40.addFeatures(features_Codessecteurs_40);
var lyr_Codessecteurs_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_40, 
                style: style_Codessecteurs_40,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_41 = new ol.format.GeoJSON();
var features_Secteurs_41 = format_Secteurs_41.readFeatures(json_Secteurs_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_41.addFeatures(features_Secteurs_41);
var lyr_Secteurs_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_41, 
                style: style_Secteurs_41,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_41_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_41_1.png" /> SU<br />' });
var format_Codessecteurs_42 = new ol.format.GeoJSON();
var features_Codessecteurs_42 = format_Codessecteurs_42.readFeatures(json_Codessecteurs_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_42.addFeatures(features_Codessecteurs_42);
var lyr_Codessecteurs_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_42, 
                style: style_Codessecteurs_42,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_43 = new ol.format.GeoJSON();
var features_Secteurs_43 = format_Secteurs_43.readFeatures(json_Secteurs_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_43.addFeatures(features_Secteurs_43);
var lyr_Secteurs_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_43, 
                style: style_Secteurs_43,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_43_0.png" /> ZC<br />\
    <img src="styles/legend/Secteurs_43_1.png" /> ZNC<br />' });
var format_Codessecteurs_44 = new ol.format.GeoJSON();
var features_Codessecteurs_44 = format_Codessecteurs_44.readFeatures(json_Codessecteurs_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_44.addFeatures(features_Codessecteurs_44);
var lyr_Codessecteurs_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_44, 
                style: style_Codessecteurs_44,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_45 = new ol.format.GeoJSON();
var features_Secteurs_45 = format_Secteurs_45.readFeatures(json_Secteurs_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_45.addFeatures(features_Secteurs_45);
var lyr_Secteurs_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_45, 
                style: style_Secteurs_45,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_45_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_45_1.png" /> U<br />' });
var format_Codessecteurs_46 = new ol.format.GeoJSON();
var features_Codessecteurs_46 = format_Codessecteurs_46.readFeatures(json_Codessecteurs_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_46.addFeatures(features_Codessecteurs_46);
var lyr_Codessecteurs_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_46, 
                style: style_Codessecteurs_46,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_47 = new ol.format.GeoJSON();
var features_Secteurs_47 = format_Secteurs_47.readFeatures(json_Secteurs_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_47.addFeatures(features_Secteurs_47);
var lyr_Secteurs_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_47, 
                style: style_Secteurs_47,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_47_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_47_1.png" /> SU<br />' });
var format_Codessecteurs_48 = new ol.format.GeoJSON();
var features_Codessecteurs_48 = format_Codessecteurs_48.readFeatures(json_Codessecteurs_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_48.addFeatures(features_Codessecteurs_48);
var lyr_Codessecteurs_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_48, 
                style: style_Codessecteurs_48,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_49 = new ol.format.GeoJSON();
var features_Secteurs_49 = format_Secteurs_49.readFeatures(json_Secteurs_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_49.addFeatures(features_Secteurs_49);
var lyr_Secteurs_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_49, 
                style: style_Secteurs_49,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_49_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_49_1.png" /> AUa<br />\
    <img src="styles/legend/Secteurs_49_2.png" /> N<br />\
    <img src="styles/legend/Secteurs_49_3.png" /> Nhd<br />\
    <img src="styles/legend/Secteurs_49_4.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_49_5.png" /> Uz<br />' });
var format_Prescriptionssurfaciques2_50 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques2_50 = format_Prescriptionssurfaciques2_50.readFeatures(json_Prescriptionssurfaciques2_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques2_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques2_50.addFeatures(features_Prescriptionssurfaciques2_50);
var lyr_Prescriptionssurfaciques2_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques2_50, 
                style: style_Prescriptionssurfaciques2_50,
                popuplayertitle: 'Prescriptions surfaciques 2',
                interactive: true,
    title: 'Prescriptions surfaciques 2<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_50_0.png" /> Couloir de nuisances sonores<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_50_1.png" /> Droit de préemption urbain envisagé<br />' });
var format_Prescriptionssurfaciques1_51 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques1_51 = format_Prescriptionssurfaciques1_51.readFeatures(json_Prescriptionssurfaciques1_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques1_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques1_51.addFeatures(features_Prescriptionssurfaciques1_51);
var lyr_Prescriptionssurfaciques1_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques1_51, 
                style: style_Prescriptionssurfaciques1_51,
                popuplayertitle: 'Prescriptions surfaciques 1',
                interactive: true,
    title: 'Prescriptions surfaciques 1<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_0.png" /> Emplacement réservé n°1 - chemins piétons<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_1.png" /> Emplacement réservé n°2 - création de voie<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_2.png" /> Espaces boisés  à conserver<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_3.png" /> Orientations d\'aménagement parcelle 408 village zone Ua<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_4.png" /> Orientations d\'aménagement zone AUa centre village<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_5.png" /> Secteurs d\'expansion des axes de ruissellements des eaux pluviales<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_6.png" /> Secteurs non constructibles-Présence de cavité souterraine<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_7.png" /> Parcelle napoléonienne n°10<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_8.png" /> Parcelle napoléonienne n°11<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_9.png" /> Parcelle napoléonienne n°12<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_10.png" /> Parcelle napoléonienne n°13<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_11.png" /> Parcelle napoléonienne n°14<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_12.png" /> Parcelle napoléonienne n°15<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_13.png" /> Parcelle napoléonienne n°16<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_14.png" /> Parcelle napoléonienne n°17<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_15.png" /> Parcelle napoléonienne n°18<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_16.png" /> Parcelle napoléonienne n°19<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_17.png" /> Parcelle napoléonienne n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_18.png" /> Parcelle napoléonienne n°20<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_19.png" /> Parcelle napoléonienne n°21<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_20.png" /> Parcelle napoléonienne n°22<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_21.png" /> Parcelle napoléonienne n°23<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_22.png" /> Parcelle napoléonienne n°3-4<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_23.png" /> Parcelle napoléonienne n°6<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_24.png" /> Parcelle napoléonienne n°7<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_25.png" /> Parcelle napoléonienne n°8<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_51_26.png" /> Parcelle napoléonnienne n°9<br />' });
var format_Prescriptionslinaire_52 = new ol.format.GeoJSON();
var features_Prescriptionslinaire_52 = format_Prescriptionslinaire_52.readFeatures(json_Prescriptionslinaire_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaire_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaire_52.addFeatures(features_Prescriptionslinaire_52);
var lyr_Prescriptionslinaire_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaire_52, 
                style: style_Prescriptionslinaire_52,
                popuplayertitle: 'Prescriptions linéaire',
                interactive: true,
    title: 'Prescriptions linéaire<br />\
    <img src="styles/legend/Prescriptionslinaire_52_0.png" /> Alignements d\'arbres à protéger<br />\
    <img src="styles/legend/Prescriptionslinaire_52_1.png" /> Axes de ruissellement des eaux pluviales<br />\
    <img src="styles/legend/Prescriptionslinaire_52_2.png" /> Haies à conserver<br />\
    <img src="styles/legend/Prescriptionslinaire_52_3.png" /> Haies à créer<br />' });
var format_Prescriptionsponctuelles_53 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_53 = format_Prescriptionsponctuelles_53.readFeatures(json_Prescriptionsponctuelles_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_53.addFeatures(features_Prescriptionsponctuelles_53);
var lyr_Prescriptionsponctuelles_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_53, 
                style: style_Prescriptionsponctuelles_53,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_0.png" /> Arbre isolé  à  protéger<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_1.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°1 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_2.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°2 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_3.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°3 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_4.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°4 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_5.png" /> Carrière à ciel ouvert (24)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_6.png" /> Cavité souterraine orig. naturelle avec  périm. protect.  inconstr. 35m  (32)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_7.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m  (27)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_8.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (29)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_9.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (30)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_10.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (31)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_11.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (33)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_12.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (34)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_13.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (35)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_14.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (36)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_15.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (37)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_16.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (38)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_17.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (41)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_18.png" /> Puits, puisards (28)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_19.png" /> Puits, puisards (39)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_20.png" /> Puits, puisards (42)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_53_21.png" /> Site suceptible d\'être pollué (source BASIAS)<br />' });
var format_Codessecteurs_54 = new ol.format.GeoJSON();
var features_Codessecteurs_54 = format_Codessecteurs_54.readFeatures(json_Codessecteurs_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_54.addFeatures(features_Codessecteurs_54);
var lyr_Codessecteurs_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_54, 
                style: style_Codessecteurs_54,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_55 = new ol.format.GeoJSON();
var features_Secteurs_55 = format_Secteurs_55.readFeatures(json_Secteurs_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_55.addFeatures(features_Secteurs_55);
var lyr_Secteurs_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_55, 
                style: style_Secteurs_55,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_55_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_55_1.png" /> SC<br />' });
var format_Codessecteurs_56 = new ol.format.GeoJSON();
var features_Codessecteurs_56 = format_Codessecteurs_56.readFeatures(json_Codessecteurs_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_56.addFeatures(features_Codessecteurs_56);
var lyr_Codessecteurs_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_56, 
                style: style_Codessecteurs_56,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_57 = new ol.format.GeoJSON();
var features_Secteurs_57 = format_Secteurs_57.readFeatures(json_Secteurs_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_57.addFeatures(features_Secteurs_57);
var lyr_Secteurs_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_57, 
                style: style_Secteurs_57,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_57_0.png" /> Secteur d\'ac<br />\
    <img src="styles/legend/Secteurs_57_1.png" /> Secteur Natu<br />\
    <img src="styles/legend/Secteurs_57_2.png" /> Secteur urba<br />\
    <img src="styles/legend/Secteurs_57_3.png" /> Secteur Urba<br />' });
var format_Secteurs_58 = new ol.format.GeoJSON();
var features_Secteurs_58 = format_Secteurs_58.readFeatures(json_Secteurs_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_58.addFeatures(features_Secteurs_58);
var lyr_Secteurs_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_58, 
                style: style_Secteurs_58,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_58_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_58_1.png" /> Ap<br />\
    <img src="styles/legend/Secteurs_58_2.png" /> At<br />\
    <img src="styles/legend/Secteurs_58_3.png" /> AUh<br />\
    <img src="styles/legend/Secteurs_58_4.png" /> AUr<br />\
    <img src="styles/legend/Secteurs_58_5.png" /> AUy1<br />\
    <img src="styles/legend/Secteurs_58_6.png" /> AUy2<br />\
    <img src="styles/legend/Secteurs_58_7.png" /> N<br />\
    <img src="styles/legend/Secteurs_58_8.png" /> Uc1<br />\
    <img src="styles/legend/Secteurs_58_9.png" /> Uc2<br />\
    <img src="styles/legend/Secteurs_58_10.png" /> Ud<br />\
    <img src="styles/legend/Secteurs_58_11.png" /> Uh<br />\
    <img src="styles/legend/Secteurs_58_12.png" /> Up<br />\
    <img src="styles/legend/Secteurs_58_13.png" /> Ur<br />\
    <img src="styles/legend/Secteurs_58_14.png" /> Uy<br />' });
var format_Prescriptionssurfaciques_59 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_59 = format_Prescriptionssurfaciques_59.readFeatures(json_Prescriptionssurfaciques_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_59.addFeatures(features_Prescriptionssurfaciques_59);
var lyr_Prescriptionssurfaciques_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_59, 
                style: style_Prescriptionssurfaciques_59,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_0.png" /> Bâtiment agricole susceptible de changer de destination<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_1.png" /> Emplacement réservé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_2.png" /> Espace boisé classé (L113-1 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_3.png" /> Mare (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_4.png" /> Patrimoine emblématique et remarquable (L151-19 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_5.png" /> Petits éléments du patrimoine (L151-19 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_6.png" /> Risque d\'effondrement de cavités<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_7.png" /> Verger (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_8.png" /> Zone à prescriptions hydrauliques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_9.png" /> Zone de danger industriel<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_10.png" /> Zone inondable<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_11.png" /> Zone potentiellement inondable<br />' });
var format_Prescriptionslinaires_60 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_60 = format_Prescriptionslinaires_60.readFeatures(json_Prescriptionslinaires_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_60.addFeatures(features_Prescriptionslinaires_60);
var lyr_Prescriptionslinaires_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_60, 
                style: style_Prescriptionslinaires_60,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_60_0.png" /> Alignement d\'arbres (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionslinaires_60_1.png" /> Espace boisé classé (L113-1 CU)<br />\
    <img src="styles/legend/Prescriptionslinaires_60_2.png" /> Fossé  (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionslinaires_60_3.png" /> Haie basse (L151-23 CU)<br />' });
var format_Prescriptionsponctuelles_61 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_61 = format_Prescriptionsponctuelles_61.readFeatures(json_Prescriptionsponctuelles_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_61.addFeatures(features_Prescriptionsponctuelles_61);
var lyr_Prescriptionsponctuelles_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_61, 
                style: style_Prescriptionsponctuelles_61,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_61_0.png" /> Espace boisé classé (L113-1 CU)<br />' });
var format_Codessecteurs_62 = new ol.format.GeoJSON();
var features_Codessecteurs_62 = format_Codessecteurs_62.readFeatures(json_Codessecteurs_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_62.addFeatures(features_Codessecteurs_62);
var lyr_Codessecteurs_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_62, 
                style: style_Codessecteurs_62,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_63 = new ol.format.GeoJSON();
var features_Secteurs_63 = format_Secteurs_63.readFeatures(json_Secteurs_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_63.addFeatures(features_Secteurs_63);
var lyr_Secteurs_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_63, 
                style: style_Secteurs_63,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_63_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_63_1.png" /> An<br />\
    <img src="styles/legend/Secteurs_63_2.png" /> Ap<br />\
    <img src="styles/legend/Secteurs_63_3.png" /> AUE<br />\
    <img src="styles/legend/Secteurs_63_4.png" /> AUEa<br />\
    <img src="styles/legend/Secteurs_63_5.png" /> AUR<br />\
    <img src="styles/legend/Secteurs_63_6.png" /> AURa<br />\
    <img src="styles/legend/Secteurs_63_7.png" /> N<br />\
    <img src="styles/legend/Secteurs_63_8.png" /> Na<br />\
    <img src="styles/legend/Secteurs_63_9.png" /> UC<br />\
    <img src="styles/legend/Secteurs_63_10.png" /> UE<br />\
    <img src="styles/legend/Secteurs_63_11.png" /> UH<br />\
    <img src="styles/legend/Secteurs_63_12.png" /> UR<br />' });
var format_Prescriptionssurfaciques_64 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_64 = format_Prescriptionssurfaciques_64.readFeatures(json_Prescriptionssurfaciques_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_64.addFeatures(features_Prescriptionssurfaciques_64);
var lyr_Prescriptionssurfaciques_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_64, 
                style: style_Prescriptionssurfaciques_64,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_0.png" /> Emplacement réservé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_1.png" /> Espace boisé classé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_2.png" /> Espace paysager à protéger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_3.png" /> Expansion des ruissellements<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_4.png" /> Patrimoine bati à protéger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_5.png" /> Secteur de risque lié aux présomptions de vides et indices de vides<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_6.png" /> verger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_7.png" /> Zone de vigilance<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_8.png" /> Zone potentiellement inondable<br />' });
var format_Prescriptionslinaires_65 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_65 = format_Prescriptionslinaires_65.readFeatures(json_Prescriptionslinaires_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_65.addFeatures(features_Prescriptionslinaires_65);
var lyr_Prescriptionslinaires_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_65, 
                style: style_Prescriptionslinaires_65,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
                title: '<img src="styles/legend/Prescriptionslinaires_65.png" /> Prescriptions linéaires'
            });
var format_Prescriptionsponctuelles_66 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_66 = format_Prescriptionsponctuelles_66.readFeatures(json_Prescriptionsponctuelles_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_66.addFeatures(features_Prescriptionsponctuelles_66);
var lyr_Prescriptionsponctuelles_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_66, 
                style: style_Prescriptionsponctuelles_66,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_0.png" /> Batiment pouvant changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_1.png" /> Mare à protéger<br />' });
var format_Codessecteurs_67 = new ol.format.GeoJSON();
var features_Codessecteurs_67 = format_Codessecteurs_67.readFeatures(json_Codessecteurs_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_67.addFeatures(features_Codessecteurs_67);
var lyr_Codessecteurs_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_67, 
                style: style_Codessecteurs_67,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_68 = new ol.format.GeoJSON();
var features_Secteurs_68 = format_Secteurs_68.readFeatures(json_Secteurs_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_68.addFeatures(features_Secteurs_68);
var lyr_Secteurs_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_68, 
                style: style_Secteurs_68,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_68_0.png" /> UCp<br />\
    <img src="styles/legend/Secteurs_68_1.png" /> UFp<br />\
    <img src="styles/legend/Secteurs_68_2.png" /> UH<br />\
    <img src="styles/legend/Secteurs_68_3.png" /> UR<br />\
    <img src="styles/legend/Secteurs_68_4.png" /> UE<br />\
    <img src="styles/legend/Secteurs_68_5.png" /> UV<br />\
    <img src="styles/legend/Secteurs_68_6.png" /> UZa<br />\
    <img src="styles/legend/Secteurs_68_7.png" /> UZi<br />\
    <img src="styles/legend/Secteurs_68_8.png" /> UZc<br />\
    <img src="styles/legend/Secteurs_68_9.png" /> UZcp<br />\
    <img src="styles/legend/Secteurs_68_10.png" /> UZe<br />\
    <img src="styles/legend/Secteurs_68_11.png" /> UZep<br />\
    <img src="styles/legend/Secteurs_68_12.png" /> AUE1<br />\
    <img src="styles/legend/Secteurs_68_13.png" /> AUE2<br />\
    <img src="styles/legend/Secteurs_68_14.png" /> 1AUHs<br />\
    <img src="styles/legend/Secteurs_68_15.png" /> 1AUHm<br />\
    <img src="styles/legend/Secteurs_68_16.png" /> 2AUV<br />\
    <img src="styles/legend/Secteurs_68_17.png" /> A<br />\
    <img src="styles/legend/Secteurs_68_18.png" /> As<br />\
    <img src="styles/legend/Secteurs_68_19.png" /> Aze<br />\
    <img src="styles/legend/Secteurs_68_20.png" /> N<br />\
    <img src="styles/legend/Secteurs_68_21.png" /> Np<br />\
    <img src="styles/legend/Secteurs_68_22.png" /> Na<br />\
    <img src="styles/legend/Secteurs_68_23.png" /> Nap<br />\
    <img src="styles/legend/Secteurs_68_24.png" /> Nj<br />' });
var format_Prescriptionssurfaciques_69 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_69 = format_Prescriptionssurfaciques_69.readFeatures(json_Prescriptionssurfaciques_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_69.addFeatures(features_Prescriptionssurfaciques_69);
var lyr_Prescriptionssurfaciques_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_69, 
                style: style_Prescriptionssurfaciques_69,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_0.png" /> Emplacement réservé n°1 (Amélioration du virage)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_1.png" /> Espace boisé L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_2.png" /> Mare L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_3.png" /> Parcs, fossés et jardins L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_4.png" /> Périmètre OAP n°1 (Les Monts Foys IV)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_5.png" /> Périmètre OAP n°2 (La Côte de Saint Aubin)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_6.png" /> Périmètre OAP n°3 (Saint Clair Nord)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_7.png" /> Périmètre OAP n°4 (Equipements publics de l’avenue des anciens combattants)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_8.png" /> Périmètre OAP n°5 (Nouveau groupe scolaire)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_9.png" /> Périmètre OAP n°6 (Parking nord de l\'Atelier)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_10.png" /> Risque d’inondation par crue de rivière - aléa faible<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_11.png" /> Risque d’inondation par crue de rivière - aléa fort<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_12.png" /> Risque d’inondation par ruissellement<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_13.png" /> Risque géologique<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_14.png" /> Verger L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_15.png" /> Zone des effets indirects par bris de verre (Zbv)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_16.png" /> Zone des effets irréversibles (Zei)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_17.png" /> Zone des premiers effets létaux (Zpel)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_69_18.png" /> Zone humide L151-23 CU<br />' });
var format_Prescriptionslinaires_70 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_70 = format_Prescriptionslinaires_70.readFeatures(json_Prescriptionslinaires_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_70.addFeatures(features_Prescriptionslinaires_70);
var lyr_Prescriptionslinaires_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_70, 
                style: style_Prescriptionslinaires_70,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_70_0.png" /> Alignement d’arbres (haie basse) L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_70_1.png" /> Alignement d’arbres de haut-jet L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_70_2.png" /> Alignement d’arbres en taillis ou moyen développement L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_70_3.png" /> Ripisylve basse L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_70_4.png" /> Ripisylve haute L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_70_5.png" /> Cours d’eau L151-23 CU (Canal des Planquettes)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_6.png" /> Cours d’eau L151-23 CU (Canal des Tanneurs)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_7.png" /> Cours d’eau L151-23 CU (L\'Epte)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_8.png" /> Cours d’eau L151-23 CU (La Morette)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_9.png" /> Cours d’eau L151-23 CU (Le Gouffre)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_10.png" /> Mur remarquable L151-19 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_70_11.png" /> Mur remarquable L151-19 CU (Clôture en fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_12.png" /> Mur remarquable L151-19 CU (Emmarchement monumental)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_13.png" /> Mur remarquable L151-19 CU (Grille et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_14.png" /> Mur remarquable L151-19 CU (Grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_15.png" /> Mur remarquable L151-19 CU (Mur d\'enceinte du cimetière)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_16.png" /> Mur remarquable L151-19 CU (Mur en brique - portions en fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_17.png" /> Mur remarquable L151-19 CU (Mur en brique)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_18.png" /> Mur remarquable L151-19 CU (Mur en pierre et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_19.png" /> Mur remarquable L151-19 CU (Mur en pierre surmonté de fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_20.png" /> Mur remarquable L151-19 CU (Mur en pierre)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_21.png" /> Mur remarquable L151-19 CU (Mur et grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_22.png" /> Mur remarquable L151-19 CU (Mur et porche)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_23.png" /> Mur remarquable L151-19 CU (Mur et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_24.png" /> Mur remarquable L151-19 CU (Mur et portails)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_25.png" /> Mur remarquable L151-19 CU (Mur maçonné et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_26.png" /> Mur remarquable L151-19 CU (Mur, grille et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_27.png" /> Mur remarquable L151-19 CU (Mur)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_28.png" /> Mur remarquable L151-19 CU (Muret et grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_29.png" /> Mur remarquable L151-19 CU (Muret)<br />\
    <img src="styles/legend/Prescriptionslinaires_70_30.png" /> Linéaire de préservation de la diversité commerciale L151-16 CU<br />' });
var format_Prescriptionsponctuelles_71 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_71 = format_Prescriptionsponctuelles_71.readFeatures(json_Prescriptionsponctuelles_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_71.addFeatures(features_Prescriptionsponctuelles_71);
var lyr_Prescriptionsponctuelles_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_71, 
                style: style_Prescriptionsponctuelles_71,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_0.png" /> Arbre isolé L151-23 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_1.png" /> Arbre isolé L151-23 CU (Cèdre bleu)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_2.png" /> Bâtiment pouvant changer de destination en zone agricole L151-11-2 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_3.png" /> Construction remarquable L151-19 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_4.png" /> Construction remarquable L151-19 CU (Ancienne ferme)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_5.png" /> Construction remarquable L151-19 CU (Anciens abattoirs)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_6.png" /> Construction remarquable L151-19 CU (Chapelle)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_7.png" /> Construction remarquable L151-19 CU (Château Pommel)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_8.png" /> Construction remarquable L151-19 CU (Maison de maître)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_9.png" /> Construction remarquable L151-19 CU (Maison éclectique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_10.png" /> Construction remarquable L151-19 CU (Maison ouvrière post-classique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_11.png" /> Construction remarquable L151-19 CU (Maison style éclectique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_71_12.png" /> Construction remarquable L151-19 CU (Villa style anglo-normand)<br />' });
var format_Codessecteurs_72 = new ol.format.GeoJSON();
var features_Codessecteurs_72 = format_Codessecteurs_72.readFeatures(json_Codessecteurs_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_72.addFeatures(features_Codessecteurs_72);
var lyr_Codessecteurs_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_72, 
                style: style_Codessecteurs_72,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_73 = new ol.format.GeoJSON();
var features_Secteurs_73 = format_Secteurs_73.readFeatures(json_Secteurs_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_73.addFeatures(features_Secteurs_73);
var lyr_Secteurs_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_73, 
                style: style_Secteurs_73,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_73_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_73_1.png" /> U<br />' });
var format_Codessecteurs_74 = new ol.format.GeoJSON();
var features_Codessecteurs_74 = format_Codessecteurs_74.readFeatures(json_Codessecteurs_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_74.addFeatures(features_Codessecteurs_74);
var lyr_Codessecteurs_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_74, 
                style: style_Codessecteurs_74,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_75 = new ol.format.GeoJSON();
var features_Secteurs_75 = format_Secteurs_75.readFeatures(json_Secteurs_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_75.addFeatures(features_Secteurs_75);
var lyr_Secteurs_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_75, 
                style: style_Secteurs_75,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_75_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_75_1.png" /> SU<br />' });
var format_Codessecteurs_76 = new ol.format.GeoJSON();
var features_Codessecteurs_76 = format_Codessecteurs_76.readFeatures(json_Codessecteurs_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_76.addFeatures(features_Codessecteurs_76);
var lyr_Codessecteurs_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_76, 
                style: style_Codessecteurs_76,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_77 = new ol.format.GeoJSON();
var features_Secteurs_77 = format_Secteurs_77.readFeatures(json_Secteurs_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_77.addFeatures(features_Secteurs_77);
var lyr_Secteurs_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_77, 
                style: style_Secteurs_77,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_77_0.png" /> 1AU<br />\
    <img src="styles/legend/Secteurs_77_1.png" /> 2AU<br />\
    <img src="styles/legend/Secteurs_77_2.png" /> 4AU<br />\
    <img src="styles/legend/Secteurs_77_3.png" /> A<br />\
    <img src="styles/legend/Secteurs_77_4.png" /> N<br />\
    <img src="styles/legend/Secteurs_77_5.png" /> Ne<br />\
    <img src="styles/legend/Secteurs_77_6.png" /> Nt<br />\
    <img src="styles/legend/Secteurs_77_7.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_77_8.png" /> Ub<br />\
    <img src="styles/legend/Secteurs_77_9.png" /> Uc<br />\
    <img src="styles/legend/Secteurs_77_10.png" /> Ue<br />\
    <img src="styles/legend/Secteurs_77_11.png" /> Uj<br />\
    <img src="styles/legend/Secteurs_77_12.png" /> Ut<br />\
    <img src="styles/legend/Secteurs_77_13.png" /> Uy<br />' });
var format_Prescriptionssurfaciques2_78 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques2_78 = format_Prescriptionssurfaciques2_78.readFeatures(json_Prescriptionssurfaciques2_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques2_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques2_78.addFeatures(features_Prescriptionssurfaciques2_78);
var lyr_Prescriptionssurfaciques2_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques2_78, 
                style: style_Prescriptionssurfaciques2_78,
                popuplayertitle: 'Prescriptions surfaciques 2',
                interactive: true,
    title: 'Prescriptions surfaciques 2<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_78_0.png" /> Débordement de cours d\'eau<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_78_1.png" /> Indice de cavité souterraine<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_78_2.png" /> Largeur d\'expansion des ruissellements<br />' });
var format_Prescriptionssurfaciques1_79 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques1_79 = format_Prescriptionssurfaciques1_79.readFeatures(json_Prescriptionssurfaciques1_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques1_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques1_79.addFeatures(features_Prescriptionssurfaciques1_79);
var lyr_Prescriptionssurfaciques1_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques1_79, 
                style: style_Prescriptionssurfaciques1_79,
                popuplayertitle: 'Prescriptions surfaciques 1',
                interactive: true,
    title: 'Prescriptions surfaciques 1<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_79_0.png" /> Emplacement réservé n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_79_1.png" /> Orientation d\'Aménagement et de programmation<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_79_2.png" /> Protection des jardins<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_79_3.png" /> Protection des zones humides<br />' });
var format_Ruissellement_80 = new ol.format.GeoJSON();
var features_Ruissellement_80 = format_Ruissellement_80.readFeatures(json_Ruissellement_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruissellement_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruissellement_80.addFeatures(features_Ruissellement_80);
var lyr_Ruissellement_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruissellement_80, 
                style: style_Ruissellement_80,
                popuplayertitle: 'Ruissellement',
                interactive: true,
    title: 'Ruissellement<br />\
    <img src="styles/legend/Ruissellement_80_0.png" /> Axe de ruissellement<br />\
    <img src="styles/legend/Ruissellement_80_1.png" /> Axe de ruissellement anthropique<br />' });
var format_Prescriptionslinaires_81 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_81 = format_Prescriptionslinaires_81.readFeatures(json_Prescriptionslinaires_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_81.addFeatures(features_Prescriptionslinaires_81);
var lyr_Prescriptionslinaires_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_81, 
                style: style_Prescriptionslinaires_81,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_81_0.png" /> Création de plantations<br />\
    <img src="styles/legend/Prescriptionslinaires_81_1.png" /> Protection des haies et alignements d\'arbres<br />\
    <img src="styles/legend/Prescriptionslinaires_81_2.png" /> Protection des talus<br />\
    <img src="styles/legend/Prescriptionslinaires_81_3.png" /> Protection du linéaire commercial<br />' });
var format_Prescriptionsponctuelles_82 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_82 = format_Prescriptionsponctuelles_82.readFeatures(json_Prescriptionsponctuelles_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_82.addFeatures(features_Prescriptionsponctuelles_82);
var lyr_Prescriptionsponctuelles_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_82, 
                style: style_Prescriptionsponctuelles_82,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_82_0.png" /> Protection patrimoine<br />' });
var format_Codessecteurs_83 = new ol.format.GeoJSON();
var features_Codessecteurs_83 = format_Codessecteurs_83.readFeatures(json_Codessecteurs_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_83.addFeatures(features_Codessecteurs_83);
var lyr_Codessecteurs_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_83, 
                style: style_Codessecteurs_83,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_84 = new ol.format.GeoJSON();
var features_Secteurs_84 = format_Secteurs_84.readFeatures(json_Secteurs_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_84.addFeatures(features_Secteurs_84);
var lyr_Secteurs_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_84, 
                style: style_Secteurs_84,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_84_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_84_1.png" /> SU<br />' });
var format_Codessecteurs_85 = new ol.format.GeoJSON();
var features_Codessecteurs_85 = format_Codessecteurs_85.readFeatures(json_Codessecteurs_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_85.addFeatures(features_Codessecteurs_85);
var lyr_Codessecteurs_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_85, 
                style: style_Codessecteurs_85,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_86 = new ol.format.GeoJSON();
var features_Secteurs_86 = format_Secteurs_86.readFeatures(json_Secteurs_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_86.addFeatures(features_Secteurs_86);
var lyr_Secteurs_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_86, 
                style: style_Secteurs_86,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_86_0.png" /> 1AU<br />\
    <img src="styles/legend/Secteurs_86_1.png" /> 1AUe<br />\
    <img src="styles/legend/Secteurs_86_2.png" /> A<br />\
    <img src="styles/legend/Secteurs_86_3.png" /> N<br />\
    <img src="styles/legend/Secteurs_86_4.png" /> Nj<br />\
    <img src="styles/legend/Secteurs_86_5.png" /> Ny<br />\
    <img src="styles/legend/Secteurs_86_6.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_86_7.png" /> Ub<br />\
    <img src="styles/legend/Secteurs_86_8.png" /> Ue<br />\
    <img src="styles/legend/Secteurs_86_9.png" /> Uh<br />\
    <img src="styles/legend/Secteurs_86_10.png" /> Uyc<br />\
    <img src="styles/legend/Secteurs_86_11.png" /> Uyi<br />' });
var format_Prescriptionssurfaciques_87 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_87 = format_Prescriptionssurfaciques_87.readFeatures(json_Prescriptionssurfaciques_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_87.addFeatures(features_Prescriptionssurfaciques_87);
var lyr_Prescriptionssurfaciques_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_87, 
                style: style_Prescriptionssurfaciques_87,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_87_0.png" /> Emplacement réservé n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_87_1.png" /> Emplacement réservé n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_87_2.png" /> Orientation d\'Aménagement et de Programmation<br />\
    <img src="styles/legend/Prescriptionssurfaciques_87_3.png" /> Protection des Espaces boisées Classés<br />\
    <img src="styles/legend/Prescriptionssurfaciques_87_4.png" /> Protection des zones humides<br />\
    <img src="styles/legend/Prescriptionssurfaciques_87_5.png" /> Protection du patrimoine<br />' });
var format_Prescriptionslinaires_88 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_88 = format_Prescriptionslinaires_88.readFeatures(json_Prescriptionslinaires_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_88.addFeatures(features_Prescriptionslinaires_88);
var lyr_Prescriptionslinaires_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_88, 
                style: style_Prescriptionslinaires_88,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_88_0.png" /> Protection des haies et alignements d\'arbres<br />' });
var format_Prescriptionsponctuelles_89 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_89 = format_Prescriptionsponctuelles_89.readFeatures(json_Prescriptionsponctuelles_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_89.addFeatures(features_Prescriptionsponctuelles_89);
var lyr_Prescriptionsponctuelles_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_89, 
                style: style_Prescriptionsponctuelles_89,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_89_0.png" /> Protection des arbres<br />\
    <img src="styles/legend/Prescriptionsponctuelles_89_1.png" /> Protection des mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_89_2.png" /> Protection patrimoine<br />' });
var format_Codessecteurs_90 = new ol.format.GeoJSON();
var features_Codessecteurs_90 = format_Codessecteurs_90.readFeatures(json_Codessecteurs_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_90.addFeatures(features_Codessecteurs_90);
var lyr_Codessecteurs_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_90, 
                style: style_Codessecteurs_90,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_91 = new ol.format.GeoJSON();
var features_Secteurs_91 = format_Secteurs_91.readFeatures(json_Secteurs_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_91.addFeatures(features_Secteurs_91);
var lyr_Secteurs_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_91, 
                style: style_Secteurs_91,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_91_0.png" /> SA<br />\
    <img src="styles/legend/Secteurs_91_1.png" /> SN<br />\
    <img src="styles/legend/Secteurs_91_2.png" /> SU<br />' });
var format_Codessecteurs_92 = new ol.format.GeoJSON();
var features_Codessecteurs_92 = format_Codessecteurs_92.readFeatures(json_Codessecteurs_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_92.addFeatures(features_Codessecteurs_92);
var lyr_Codessecteurs_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_92, 
                style: style_Codessecteurs_92,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_93 = new ol.format.GeoJSON();
var features_Secteurs_93 = format_Secteurs_93.readFeatures(json_Secteurs_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_93.addFeatures(features_Secteurs_93);
var lyr_Secteurs_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_93, 
                style: style_Secteurs_93,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_93_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_93_1.png" /> U<br />' });
var format_Espaceboisclass_94 = new ol.format.GeoJSON();
var features_Espaceboisclass_94 = format_Espaceboisclass_94.readFeatures(json_Espaceboisclass_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaceboisclass_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaceboisclass_94.addFeatures(features_Espaceboisclass_94);
var lyr_Espaceboisclass_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaceboisclass_94, 
                style: style_Espaceboisclass_94,
                popuplayertitle: 'Espace boisé classé',
                interactive: true,
                title: '<img src="styles/legend/Espaceboisclass_94.png" /> Espace boisé classé'
            });
var format_Codessecteurs_95 = new ol.format.GeoJSON();
var features_Codessecteurs_95 = format_Codessecteurs_95.readFeatures(json_Codessecteurs_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_95.addFeatures(features_Codessecteurs_95);
var lyr_Codessecteurs_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_95, 
                style: style_Codessecteurs_95,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_96 = new ol.format.GeoJSON();
var features_Secteurs_96 = format_Secteurs_96.readFeatures(json_Secteurs_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_96.addFeatures(features_Secteurs_96);
var lyr_Secteurs_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_96, 
                style: style_Secteurs_96,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_96_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_96_1.png" /> U<br />' });
var format_Bois_97 = new ol.format.GeoJSON();
var features_Bois_97 = format_Bois_97.readFeatures(json_Bois_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bois_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bois_97.addFeatures(features_Bois_97);
var lyr_Bois_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bois_97, 
                style: style_Bois_97,
                popuplayertitle: 'Bois',
                interactive: true,
                title: '<img src="styles/legend/Bois_97.png" /> Bois'
            });
var format_Codessecteurs_98 = new ol.format.GeoJSON();
var features_Codessecteurs_98 = format_Codessecteurs_98.readFeatures(json_Codessecteurs_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_98.addFeatures(features_Codessecteurs_98);
var lyr_Codessecteurs_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_98, 
                style: style_Codessecteurs_98,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_99 = new ol.format.GeoJSON();
var features_Secteurs_99 = format_Secteurs_99.readFeatures(json_Secteurs_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_99.addFeatures(features_Secteurs_99);
var lyr_Secteurs_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_99, 
                style: style_Secteurs_99,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_99_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_99_1.png" /> U<br />' });
var format_Droitdepremption_100 = new ol.format.GeoJSON();
var features_Droitdepremption_100 = format_Droitdepremption_100.readFeatures(json_Droitdepremption_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Droitdepremption_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Droitdepremption_100.addFeatures(features_Droitdepremption_100);
var lyr_Droitdepremption_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Droitdepremption_100, 
                style: style_Droitdepremption_100,
                popuplayertitle: 'Droit de préemption',
                interactive: true,
                title: '<img src="styles/legend/Droitdepremption_100.png" /> Droit de préemption'
            });
var format_Codessecteurs_101 = new ol.format.GeoJSON();
var features_Codessecteurs_101 = format_Codessecteurs_101.readFeatures(json_Codessecteurs_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_101.addFeatures(features_Codessecteurs_101);
var lyr_Codessecteurs_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_101, 
                style: style_Codessecteurs_101,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_102 = new ol.format.GeoJSON();
var features_Secteurs_102 = format_Secteurs_102.readFeatures(json_Secteurs_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_102.addFeatures(features_Secteurs_102);
var lyr_Secteurs_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_102, 
                style: style_Secteurs_102,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_102_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_102_1.png" /> U<br />' });
var format_DroitdePremption_103 = new ol.format.GeoJSON();
var features_DroitdePremption_103 = format_DroitdePremption_103.readFeatures(json_DroitdePremption_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DroitdePremption_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DroitdePremption_103.addFeatures(features_DroitdePremption_103);
var lyr_DroitdePremption_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DroitdePremption_103, 
                style: style_DroitdePremption_103,
                popuplayertitle: 'Droit de Préemption',
                interactive: true,
                title: '<img src="styles/legend/DroitdePremption_103.png" /> Droit de Préemption'
            });
var format_Codessecteurs_104 = new ol.format.GeoJSON();
var features_Codessecteurs_104 = format_Codessecteurs_104.readFeatures(json_Codessecteurs_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_104.addFeatures(features_Codessecteurs_104);
var lyr_Codessecteurs_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_104, 
                style: style_Codessecteurs_104,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_105 = new ol.format.GeoJSON();
var features_Secteurs_105 = format_Secteurs_105.readFeatures(json_Secteurs_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_105.addFeatures(features_Secteurs_105);
var lyr_Secteurs_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_105, 
                style: style_Secteurs_105,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_105_0.png" /> 1AUa<br />\
    <img src="styles/legend/Secteurs_105_1.png" /> 1AUb<br />\
    <img src="styles/legend/Secteurs_105_2.png" /> 2AU<br />\
    <img src="styles/legend/Secteurs_105_3.png" /> A<br />\
    <img src="styles/legend/Secteurs_105_4.png" /> Na<br />\
    <img src="styles/legend/Secteurs_105_5.png" /> Ua<br />' });
var format_DroitdePremptionurbain_106 = new ol.format.GeoJSON();
var features_DroitdePremptionurbain_106 = format_DroitdePremptionurbain_106.readFeatures(json_DroitdePremptionurbain_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DroitdePremptionurbain_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DroitdePremptionurbain_106.addFeatures(features_DroitdePremptionurbain_106);
var lyr_DroitdePremptionurbain_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DroitdePremptionurbain_106, 
                style: style_DroitdePremptionurbain_106,
                popuplayertitle: 'Droit de Préemption urbain',
                interactive: true,
                title: '<img src="styles/legend/DroitdePremptionurbain_106.png" /> Droit de Préemption urbain'
            });
var format_Prescriptionssurfaciques_107 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_107 = format_Prescriptionssurfaciques_107.readFeatures(json_Prescriptionssurfaciques_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_107.addFeatures(features_Prescriptionssurfaciques_107);
var lyr_Prescriptionssurfaciques_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_107, 
                style: style_Prescriptionssurfaciques_107,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_0.png" /> ER 1:construction d\'une bibliothèque<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_1.png" /> ER 2:Extension de l\'école<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_2.png" /> ER 3:Extension du cimetière<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_3.png" /> ER 4:Amgnt carrefour RD 12/VC 2-Bassin rétention-Escpave vert<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_4.png" /> ER 5:Élargissement de la voirie<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_5.png" /> Espaces boisés classés<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_6.png" /> Secteur 1AUa comprennant des orientations d\'aménagement<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_7.png" /> Secteur d\'expansion des ruissellements<br />\
    <img src="styles/legend/Prescriptionssurfaciques_107_8.png" /> Zone d\'aléas géologiques<br />' });
var format_Prescriptionsponctuelles_108 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_108 = format_Prescriptionsponctuelles_108.readFeatures(json_Prescriptionsponctuelles_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_108.addFeatures(features_Prescriptionsponctuelles_108);
var lyr_Prescriptionsponctuelles_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_108, 
                style: style_Prescriptionsponctuelles_108,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_108_0.png" /> Bâtiments agricoles d\'intérêt architectural n°1<br />\
    <img src="styles/legend/Prescriptionsponctuelles_108_1.png" /> Bâtiments agricoles d\'intérêt architectural n°2<br />\
    <img src="styles/legend/Prescriptionsponctuelles_108_2.png" /> Bétoire<br />\
    <img src="styles/legend/Prescriptionsponctuelles_108_3.png" /> Mares à conserver<br />' });
var format_Codessecteurs_109 = new ol.format.GeoJSON();
var features_Codessecteurs_109 = format_Codessecteurs_109.readFeatures(json_Codessecteurs_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_109.addFeatures(features_Codessecteurs_109);
var lyr_Codessecteurs_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_109, 
                style: style_Codessecteurs_109,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_110 = new ol.format.GeoJSON();
var features_Secteurs_110 = format_Secteurs_110.readFeatures(json_Secteurs_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_110.addFeatures(features_Secteurs_110);
var lyr_Secteurs_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_110, 
                style: style_Secteurs_110,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_110_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_110_1.png" /> SU<br />' });
var format_Codessecteurs_111 = new ol.format.GeoJSON();
var features_Codessecteurs_111 = format_Codessecteurs_111.readFeatures(json_Codessecteurs_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_111.addFeatures(features_Codessecteurs_111);
var lyr_Codessecteurs_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_111, 
                style: style_Codessecteurs_111,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_112 = new ol.format.GeoJSON();
var features_Secteurs_112 = format_Secteurs_112.readFeatures(json_Secteurs_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_112.addFeatures(features_Secteurs_112);
var lyr_Secteurs_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_112, 
                style: style_Secteurs_112,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_112_0.png" /> Zone constructible<br />\
    <img src="styles/legend/Secteurs_112_1.png" /> Zone naturelle<br />' });
var format_Secteurs_113 = new ol.format.GeoJSON();
var features_Secteurs_113 = format_Secteurs_113.readFeatures(json_Secteurs_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_113.addFeatures(features_Secteurs_113);
var lyr_Secteurs_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_113, 
                style: style_Secteurs_113,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_113_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_113_1.png" /> U<br />' });
var format_Prescriptionssurfaciques_114 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_114 = format_Prescriptionssurfaciques_114.readFeatures(json_Prescriptionssurfaciques_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_114.addFeatures(features_Prescriptionssurfaciques_114);
var lyr_Prescriptionssurfaciques_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_114, 
                style: style_Prescriptionssurfaciques_114,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_0.png" /> Corps de ferme en activité n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_1.png" /> Corps de ferme en activité n°10<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_2.png" /> Corps de ferme en activité n°11<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_3.png" /> Corps de ferme en activité n°12<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_4.png" /> Corps de ferme en activité n°13<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_5.png" /> Corps de ferme en activité n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_6.png" /> Corps de ferme en activité n°3<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_7.png" /> Corps de ferme en activité n°4<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_8.png" /> Corps de ferme en activité n°5<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_9.png" /> Corps de ferme en activité n°6<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_10.png" /> Corps de ferme en activité n°7<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_11.png" /> Corps de ferme en activité n°8<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_12.png" /> Corps de ferme en activité n°9<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_13.png" /> Couloir de présomption de nuisances sonores<br />\
    <img src="styles/legend/Prescriptionssurfaciques_114_14.png" /> Site archéologique (source:Service Régional de l\'Archéologie)<br />' });
var format_Prescriptionslinaires_115 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_115 = format_Prescriptionslinaires_115.readFeatures(json_Prescriptionslinaires_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_115.addFeatures(features_Prescriptionslinaires_115);
var lyr_Prescriptionslinaires_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_115, 
                style: style_Prescriptionslinaires_115,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_115_0.png" /> Axe de ruissellement(Talweg)<br />\
    <img src="styles/legend/Prescriptionslinaires_115_1.png" /> Haies paysagères remarquable<br />' });
var format_Prescriptionsponctuelles_116 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_116 = format_Prescriptionsponctuelles_116.readFeatures(json_Prescriptionsponctuelles_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_116.addFeatures(features_Prescriptionsponctuelles_116);
var lyr_Prescriptionsponctuelles_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_116, 
                style: style_Prescriptionsponctuelles_116,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_116_0.png" /> Mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_116_1.png" /> Monument historique classé(500 m de rayon)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_116_2.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Prescriptionsponctuelles_116_3.png" /> Sources<br />\
    <img src="styles/legend/Prescriptionsponctuelles_116_4.png" /> Zone d\'étangs<br />' });
var format_Codessecteurs_117 = new ol.format.GeoJSON();
var features_Codessecteurs_117 = format_Codessecteurs_117.readFeatures(json_Codessecteurs_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_117.addFeatures(features_Codessecteurs_117);
var lyr_Codessecteurs_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_117, 
                style: style_Codessecteurs_117,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Prescriptionssurfaciques_118 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_118 = format_Prescriptionssurfaciques_118.readFeatures(json_Prescriptionssurfaciques_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_118.addFeatures(features_Prescriptionssurfaciques_118);
var lyr_Prescriptionssurfaciques_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_118, 
                style: style_Prescriptionssurfaciques_118,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_118_0.png" /> Périmètre de protection éloigné du captage<br />' });
var format_Secteurs_119 = new ol.format.GeoJSON();
var features_Secteurs_119 = format_Secteurs_119.readFeatures(json_Secteurs_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_119.addFeatures(features_Secteurs_119);
var lyr_Secteurs_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_119, 
                style: style_Secteurs_119,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_119_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_119_1.png" /> SU<br />' });
var format_Codessecteurs_120 = new ol.format.GeoJSON();
var features_Codessecteurs_120 = format_Codessecteurs_120.readFeatures(json_Codessecteurs_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_120.addFeatures(features_Codessecteurs_120);
var lyr_Codessecteurs_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_120, 
                style: style_Codessecteurs_120,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_121 = new ol.format.GeoJSON();
var features_Secteurs_121 = format_Secteurs_121.readFeatures(json_Secteurs_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_121.addFeatures(features_Secteurs_121);
var lyr_Secteurs_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_121, 
                style: style_Secteurs_121,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_121_0.png" /> SA<br />\
    <img src="styles/legend/Secteurs_121_1.png" /> SN<br />\
    <img src="styles/legend/Secteurs_121_2.png" /> SU<br />' });
var format_Codessecteurs_122 = new ol.format.GeoJSON();
var features_Codessecteurs_122 = format_Codessecteurs_122.readFeatures(json_Codessecteurs_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_122.addFeatures(features_Codessecteurs_122);
var lyr_Codessecteurs_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_122, 
                style: style_Codessecteurs_122,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_123 = new ol.format.GeoJSON();
var features_Secteurs_123 = format_Secteurs_123.readFeatures(json_Secteurs_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_123.addFeatures(features_Secteurs_123);
var lyr_Secteurs_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_123, 
                style: style_Secteurs_123,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_123_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_123_1.png" /> U<br />' });
var format_Prescriptionssurfaciques_124 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_124 = format_Prescriptionssurfaciques_124.readFeatures(json_Prescriptionssurfaciques_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_124.addFeatures(features_Prescriptionssurfaciques_124);
var lyr_Prescriptionssurfaciques_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_124, 
                style: style_Prescriptionssurfaciques_124,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_0.png" /> Corps de ferme en activité-n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_1.png" /> Corps de ferme en activité-n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_2.png" /> Corps de ferme en activité-n°3<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_3.png" /> Corps de ferme en activité-n°4<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_4.png" /> Corps de ferme en activité-n°5<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_5.png" /> Corps de ferme en activité-n°6<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_6.png" /> Corps de ferme en activité-n°7<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_7.png" /> Corps de ferme en activité-n°8<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_8.png" /> Corps de ferme en activité-n°9<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_9.png" /> Corps de ferme en activité-n°10<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_10.png" /> Droit de Préemption Urbain<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_11.png" /> Périmètre de protection éloigné<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_12.png" /> Périmètre de protection rapproché<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_13.png" /> Sites archéologique à localisation approximative n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_124_14.png" /> Sites archéologique à localisation approximative n°4<br />' });
var format_Prescriptionslinaires_125 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_125 = format_Prescriptionslinaires_125.readFeatures(json_Prescriptionslinaires_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_125.addFeatures(features_Prescriptionslinaires_125);
var lyr_Prescriptionslinaires_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_125, 
                style: style_Prescriptionslinaires_125,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_125_0.png" /> Axes de ruissellements<br />\
    <img src="styles/legend/Prescriptionslinaires_125_1.png" /> Axes de ruissellements concentrés, sans zone d\'expansion<br />' });
var format_Prescriptionsponctuelles_126 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_126 = format_Prescriptionsponctuelles_126.readFeatures(json_Prescriptionsponctuelles_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_126.addFeatures(features_Prescriptionsponctuelles_126);
var lyr_Prescriptionsponctuelles_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_126, 
                style: style_Prescriptionsponctuelles_126,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_0.png" /> Anciennes mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_1.png" /> Carrière à ciel ouvert n°10<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_2.png" /> Carrière à ciel ouvert n°7<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_3.png" /> Carrière à ciel ouvert n°8<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_4.png" /> Carrière remblayée n°9<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_5.png" /> Mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_6.png" /> Réservoirs, puits, lavoirs<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_7.png" /> Réservoirs, puits, lavoirs(Syndicat d\'eau)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_8.png" /> Source<br />\
    <img src="styles/legend/Prescriptionsponctuelles_126_9.png" /> Vue paysagère à préserver<br />' });
var format_Codessecteurs_127 = new ol.format.GeoJSON();
var features_Codessecteurs_127 = format_Codessecteurs_127.readFeatures(json_Codessecteurs_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_127.addFeatures(features_Codessecteurs_127);
var lyr_Codessecteurs_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_127, 
                style: style_Codessecteurs_127,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Corpsdeferme_128 = new ol.format.GeoJSON();
var features_Corpsdeferme_128 = format_Corpsdeferme_128.readFeatures(json_Corpsdeferme_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corpsdeferme_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corpsdeferme_128.addFeatures(features_Corpsdeferme_128);
var lyr_Corpsdeferme_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corpsdeferme_128, 
                style: style_Corpsdeferme_128,
                popuplayertitle: 'Corps de ferme',
                interactive: true,
                title: '<img src="styles/legend/Corpsdeferme_128.png" /> Corps de ferme'
            });
var format_Distancedereculautourdubti_129 = new ol.format.GeoJSON();
var features_Distancedereculautourdubti_129 = format_Distancedereculautourdubti_129.readFeatures(json_Distancedereculautourdubti_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distancedereculautourdubti_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distancedereculautourdubti_129.addFeatures(features_Distancedereculautourdubti_129);
var lyr_Distancedereculautourdubti_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distancedereculautourdubti_129, 
                style: style_Distancedereculautourdubti_129,
                popuplayertitle: 'Distance de recul autour du bâti',
                interactive: true,
                title: '<img src="styles/legend/Distancedereculautourdubti_129.png" /> Distance de recul autour du bâti'
            });
var format_Btiagricole_130 = new ol.format.GeoJSON();
var features_Btiagricole_130 = format_Btiagricole_130.readFeatures(json_Btiagricole_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiagricole_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiagricole_130.addFeatures(features_Btiagricole_130);
var lyr_Btiagricole_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btiagricole_130, 
                style: style_Btiagricole_130,
                popuplayertitle: 'Bâti agricole',
                interactive: true,
                title: '<img src="styles/legend/Btiagricole_130.png" /> Bâti agricole'
            });
var format_Primtredeprotectionincendie100m_131 = new ol.format.GeoJSON();
var features_Primtredeprotectionincendie100m_131 = format_Primtredeprotectionincendie100m_131.readFeatures(json_Primtredeprotectionincendie100m_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtredeprotectionincendie100m_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtredeprotectionincendie100m_131.addFeatures(features_Primtredeprotectionincendie100m_131);
var lyr_Primtredeprotectionincendie100m_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtredeprotectionincendie100m_131, 
                style: style_Primtredeprotectionincendie100m_131,
                popuplayertitle: 'Périmètre de protection incendie (100 m)',
                interactive: true,
                title: '<img src="styles/legend/Primtredeprotectionincendie100m_131.png" /> Périmètre de protection incendie (100 m)'
            });
var format_Primtredeprotectionincendie15m_132 = new ol.format.GeoJSON();
var features_Primtredeprotectionincendie15m_132 = format_Primtredeprotectionincendie15m_132.readFeatures(json_Primtredeprotectionincendie15m_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtredeprotectionincendie15m_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtredeprotectionincendie15m_132.addFeatures(features_Primtredeprotectionincendie15m_132);
var lyr_Primtredeprotectionincendie15m_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtredeprotectionincendie15m_132, 
                style: style_Primtredeprotectionincendie15m_132,
                popuplayertitle: 'Périmètre de protection incendie (15 m)',
                interactive: true,
                title: '<img src="styles/legend/Primtredeprotectionincendie15m_132.png" /> Périmètre de protection incendie (15 m)'
            });
var format_lotsanonymesPAC_133 = new ol.format.GeoJSON();
var features_lotsanonymesPAC_133 = format_lotsanonymesPAC_133.readFeatures(json_lotsanonymesPAC_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotsanonymesPAC_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotsanonymesPAC_133.addFeatures(features_lotsanonymesPAC_133);
var lyr_lotsanonymesPAC_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotsanonymesPAC_133, 
                style: style_lotsanonymesPAC_133,
                popuplayertitle: 'Îlots anonymes PAC',
                interactive: true,
                title: '<img src="styles/legend/lotsanonymesPAC_133.png" /> Îlots anonymes PAC'
            });
var format_Corpsdeferme_134 = new ol.format.GeoJSON();
var features_Corpsdeferme_134 = format_Corpsdeferme_134.readFeatures(json_Corpsdeferme_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corpsdeferme_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corpsdeferme_134.addFeatures(features_Corpsdeferme_134);
var lyr_Corpsdeferme_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corpsdeferme_134, 
                style: style_Corpsdeferme_134,
                popuplayertitle: 'Corps de ferme',
                interactive: true,
                title: '<img src="styles/legend/Corpsdeferme_134.png" /> Corps de ferme'
            });
var format_Distancedereculautourdubti_135 = new ol.format.GeoJSON();
var features_Distancedereculautourdubti_135 = format_Distancedereculautourdubti_135.readFeatures(json_Distancedereculautourdubti_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distancedereculautourdubti_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distancedereculautourdubti_135.addFeatures(features_Distancedereculautourdubti_135);
var lyr_Distancedereculautourdubti_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distancedereculautourdubti_135, 
                style: style_Distancedereculautourdubti_135,
                popuplayertitle: 'Distance de recul autour du bâti',
                interactive: true,
                title: '<img src="styles/legend/Distancedereculautourdubti_135.png" /> Distance de recul autour du bâti'
            });
var format_Btiagricole_136 = new ol.format.GeoJSON();
var features_Btiagricole_136 = format_Btiagricole_136.readFeatures(json_Btiagricole_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiagricole_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiagricole_136.addFeatures(features_Btiagricole_136);
var lyr_Btiagricole_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btiagricole_136, 
                style: style_Btiagricole_136,
                popuplayertitle: 'Bâti agricole',
                interactive: true,
                title: '<img src="styles/legend/Btiagricole_136.png" /> Bâti agricole'
            });
var format_Zonedactivitetdeservice_137 = new ol.format.GeoJSON();
var features_Zonedactivitetdeservice_137 = format_Zonedactivitetdeservice_137.readFeatures(json_Zonedactivitetdeservice_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedactivitetdeservice_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedactivitetdeservice_137.addFeatures(features_Zonedactivitetdeservice_137);
var lyr_Zonedactivitetdeservice_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedactivitetdeservice_137, 
                style: style_Zonedactivitetdeservice_137,
                popuplayertitle: 'Zone d\'activité et de service',
                interactive: true,
                title: '<img src="styles/legend/Zonedactivitetdeservice_137.png" /> Zone d\'activité et de service'
            });
var format_ERP_138 = new ol.format.GeoJSON();
var features_ERP_138 = format_ERP_138.readFeatures(json_ERP_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERP_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERP_138.addFeatures(features_ERP_138);
var lyr_ERP_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ERP_138, 
                style: style_ERP_138,
                popuplayertitle: 'ERP',
                interactive: true,
    title: 'ERP<br />\
    <img src="styles/legend/ERP_138_0.png" /> ADMINISTRATION PRIVEE<br />\
    <img src="styles/legend/ERP_138_1.png" /> ADMINISTRATIONS, BANQUES, BUREAUX<br />\
    <img src="styles/legend/ERP_138_2.png" /> AUTRE ENSEIGNEMENT PRIVE<br />\
    <img src="styles/legend/ERP_138_3.png" /> AUTRE ENSEIGNEMENT PRIVE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_138_4.png" /> AUTRE ENSEIGNEMENT PUBLIC<br />\
    <img src="styles/legend/ERP_138_5.png" /> BRICOLAGE<br />\
    <img src="styles/legend/ERP_138_6.png" /> CABINET MEDICAL, CABINET DENTAIRE<br />\
    <img src="styles/legend/ERP_138_7.png" /> CASINO<br />\
    <img src="styles/legend/ERP_138_8.png" /> CENTRE AERE, CENTRE DE LOISIRS (AVEC SOMMEI<br />\
    <img src="styles/legend/ERP_138_9.png" /> CENTRE COMMERCIAL<br />\
    <img src="styles/legend/ERP_138_10.png" /> CENTRE EQUESTRE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_138_11.png" /> CENTRE SOCIAL CULTUREL<br />\
    <img src="styles/legend/ERP_138_12.png" /> CINEMA<br />\
    <img src="styles/legend/ERP_138_13.png" /> COLLEGE PRIVE<br />\
    <img src="styles/legend/ERP_138_14.png" /> COLLEGE PUBLIC<br />\
    <img src="styles/legend/ERP_138_15.png" /> COLONIE DE VACANCES (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_138_16.png" /> CRECHE<br />\
    <img src="styles/legend/ERP_138_17.png" /> DISCOTHEQUE<br />\
    <img src="styles/legend/ERP_138_18.png" /> ECOLE MATERNELLE PUBLIQUE<br />\
    <img src="styles/legend/ERP_138_19.png" /> ECOLE PRIMAIRE PUBLIQUE<br />\
    <img src="styles/legend/ERP_138_20.png" /> EHPAD<br />\
    <img src="styles/legend/ERP_138_21.png" /> ETABLISSEMENT CULTUEL<br />\
    <img src="styles/legend/ERP_138_22.png" /> ETABLISSEMENTS SPORTIFS COUVERTS<br />\
    <img src="styles/legend/ERP_138_23.png" /> EXPOSITION PERMANENTE<br />\
    <img src="styles/legend/ERP_138_24.png" /> EXPOSITION TEMPORAIRE<br />\
    <img src="styles/legend/ERP_138_25.png" /> FOYER DE L\'ENFANCE<br />\
    <img src="styles/legend/ERP_138_26.png" /> FOYER DE L\'ENFANCE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_138_27.png" /> GROUPE SCOLAIRE PRIVE<br />\
    <img src="styles/legend/ERP_138_28.png" /> GROUPE SCOLAIRE PUBLIC<br />\
    <img src="styles/legend/ERP_138_29.png" /> HEBERGEMENT POUR PERSONNES HANDICAPEES<br />\
    <img src="styles/legend/ERP_138_30.png" /> HIPPODROME<br />\
    <img src="styles/legend/ERP_138_31.png" /> JARDINAGE<br />\
    <img src="styles/legend/ERP_138_32.png" /> LYCEE PRIVE<br />\
    <img src="styles/legend/ERP_138_33.png" /> LYCEE PRIVE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_138_34.png" /> LYCEE PUBLIC<br />\
    <img src="styles/legend/ERP_138_35.png" /> LYCEE PUBLIC (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_138_36.png" /> MAGASIN DE VENTE<br />\
    <img src="styles/legend/ERP_138_37.png" /> MAISON DE RETRAITE MEDICALISEE (AVEC SOMMEI<br />\
    <img src="styles/legend/ERP_138_38.png" /> PARC DE STATIONNEMENT<br />\
    <img src="styles/legend/ERP_138_39.png" /> PISCINE COUVERTE<br />\
    <img src="styles/legend/ERP_138_40.png" /> PRESTATAIRE DE SERVICE<br />\
    <img src="styles/legend/ERP_138_41.png" /> RESTAURANT<br />\
    <img src="styles/legend/ERP_138_42.png" /> RESTAURANT ET DEBITS DE BOISSONS<br />\
    <img src="styles/legend/ERP_138_43.png" /> RESTAURANT LYCEE<br />\
    <img src="styles/legend/ERP_138_44.png" /> SALLE DE JEUX<br />\
    <img src="styles/legend/ERP_138_45.png" /> SALLE DE REUNIONS<br />\
    <img src="styles/legend/ERP_138_46.png" /> SALLE DE SPECTACLES<br />\
    <img src="styles/legend/ERP_138_47.png" /> SALLE DE SPORT SPECIALISEE<br />\
    <img src="styles/legend/ERP_138_48.png" /> SALLE OMNISPORTS<br />\
    <img src="styles/legend/ERP_138_49.png" /> SALLE OMNISPORTS COLLEGE<br />\
    <img src="styles/legend/ERP_138_50.png" /> SALLE OMNISPORTS LYCEE<br />\
    <img src="styles/legend/ERP_138_51.png" /> SALLE POLYVALENTE<br />\
    <img src="styles/legend/ERP_138_52.png" /> SALLES D\'AUDITION, DE CONFERENCES, DE REUNI<br />' });
var format_PPE_139 = new ol.format.GeoJSON();
var features_PPE_139 = format_PPE_139.readFeatures(json_PPE_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPE_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPE_139.addFeatures(features_PPE_139);
var lyr_PPE_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPE_139, 
                style: style_PPE_139,
                popuplayertitle: 'Périmètres de Protection Éloignés (PPE)',
                interactive: true,
                title: '<img src="styles/legend/PPE_139.png" /> Périmètres de Protection Éloignés (PPE)'
            });
var format_PPI_140 = new ol.format.GeoJSON();
var features_PPI_140 = format_PPI_140.readFeatures(json_PPI_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPI_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPI_140.addFeatures(features_PPI_140);
var lyr_PPI_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPI_140, 
                style: style_PPI_140,
                popuplayertitle: 'Périmètres de Protection Immédiats (PPI)',
                interactive: true,
                title: '<img src="styles/legend/PPI_140.png" /> Périmètres de Protection Immédiats (PPI)'
            });
var format_PPR_141 = new ol.format.GeoJSON();
var features_PPR_141 = format_PPR_141.readFeatures(json_PPR_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPR_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPR_141.addFeatures(features_PPR_141);
var lyr_PPR_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPR_141, 
                style: style_PPR_141,
                popuplayertitle: 'Périmètres de Protection Rapprochés (PPR)',
                interactive: true,
                title: '<img src="styles/legend/PPR_141.png" /> Périmètres de Protection Rapprochés (PPR)'
            });
var format_Fortspubliques_142 = new ol.format.GeoJSON();
var features_Fortspubliques_142 = format_Fortspubliques_142.readFeatures(json_Fortspubliques_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fortspubliques_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fortspubliques_142.addFeatures(features_Fortspubliques_142);
var lyr_Fortspubliques_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fortspubliques_142, 
                style: style_Fortspubliques_142,
                popuplayertitle: 'Forêts publiques',
                interactive: true,
                title: '<img src="styles/legend/Fortspubliques_142.png" /> Forêts publiques'
            });
var format_Haies_143 = new ol.format.GeoJSON();
var features_Haies_143 = format_Haies_143.readFeatures(json_Haies_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_143.addFeatures(features_Haies_143);
var lyr_Haies_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_143,
maxResolution:7.00111653806549,
 
                style: style_Haies_143,
                popuplayertitle: 'Haies',
                interactive: true,
                title: '<img src="styles/legend/Haies_143.png" /> Haies'
            });
var format_Trononshydrographiques_144 = new ol.format.GeoJSON();
var features_Trononshydrographiques_144 = format_Trononshydrographiques_144.readFeatures(json_Trononshydrographiques_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trononshydrographiques_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trononshydrographiques_144.addFeatures(features_Trononshydrographiques_144);
var lyr_Trononshydrographiques_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trononshydrographiques_144,
maxResolution:7.00111653806549,
 
                style: style_Trononshydrographiques_144,
                popuplayertitle: 'Tronçons hydrographiques',
                interactive: true,
                title: '<img src="styles/legend/Trononshydrographiques_144.png" /> Tronçons hydrographiques'
            });
var format_Surfaceshydrographiques_145 = new ol.format.GeoJSON();
var features_Surfaceshydrographiques_145 = format_Surfaceshydrographiques_145.readFeatures(json_Surfaceshydrographiques_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfaceshydrographiques_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfaceshydrographiques_145.addFeatures(features_Surfaceshydrographiques_145);
var lyr_Surfaceshydrographiques_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfaceshydrographiques_145,
maxResolution:7.00111653806549,
 
                style: style_Surfaceshydrographiques_145,
                popuplayertitle: 'Surfaces hydrographiques',
                interactive: true,
                title: '<img src="styles/legend/Surfaceshydrographiques_145.png" /> Surfaces hydrographiques'
            });
var format_Dtailshydrographiques_146 = new ol.format.GeoJSON();
var features_Dtailshydrographiques_146 = format_Dtailshydrographiques_146.readFeatures(json_Dtailshydrographiques_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dtailshydrographiques_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dtailshydrographiques_146.addFeatures(features_Dtailshydrographiques_146);
var lyr_Dtailshydrographiques_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dtailshydrographiques_146,
maxResolution:7.00111653806549,
 
                style: style_Dtailshydrographiques_146,
                popuplayertitle: 'Détails hydrographiques',
                interactive: true,
    title: 'Détails hydrographiques<br />\
    <img src="styles/legend/Dtailshydrographiques_146_0.png" /> Citerne<br />\
    <img src="styles/legend/Dtailshydrographiques_146_1.png" /> Point d\'eau<br />\
    <img src="styles/legend/Dtailshydrographiques_146_2.png" /> Résurgence<br />\
    <img src="styles/legend/Dtailshydrographiques_146_3.png" /> Source<br />\
    <img src="styles/legend/Dtailshydrographiques_146_4.png" /> Source captée<br />' });
var format_MaresPRAM_147 = new ol.format.GeoJSON();
var features_MaresPRAM_147 = format_MaresPRAM_147.readFeatures(json_MaresPRAM_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaresPRAM_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaresPRAM_147.addFeatures(features_MaresPRAM_147);
var lyr_MaresPRAM_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaresPRAM_147,
maxResolution:7.00111653806549,
 
                style: style_MaresPRAM_147,
                popuplayertitle: 'Mares PRAM',
                interactive: true,
                title: '<img src="styles/legend/MaresPRAM_147.png" /> Mares PRAM'
            });
var format_Bassinversanttopographique_148 = new ol.format.GeoJSON();
var features_Bassinversanttopographique_148 = format_Bassinversanttopographique_148.readFeatures(json_Bassinversanttopographique_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bassinversanttopographique_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bassinversanttopographique_148.addFeatures(features_Bassinversanttopographique_148);
var lyr_Bassinversanttopographique_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bassinversanttopographique_148, 
                style: style_Bassinversanttopographique_148,
                popuplayertitle: 'Bassin versant topographique',
                interactive: true,
                title: '<img src="styles/legend/Bassinversanttopographique_148.png" /> Bassin versant topographique'
            });
var format_Toponymiehydrographie_149 = new ol.format.GeoJSON();
var features_Toponymiehydrographie_149 = format_Toponymiehydrographie_149.readFeatures(json_Toponymiehydrographie_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponymiehydrographie_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponymiehydrographie_149.addFeatures(features_Toponymiehydrographie_149);
var lyr_Toponymiehydrographie_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponymiehydrographie_149,
maxResolution:7.00111653806549,
 
                style: style_Toponymiehydrographie_149,
                popuplayertitle: 'Toponymie hydrographie',
                interactive: true,
                title: '<img src="styles/legend/Toponymiehydrographie_149.png" /> Toponymie hydrographie'
            });
var format_ZPPAGournayenBrayZone2_150 = new ol.format.GeoJSON();
var features_ZPPAGournayenBrayZone2_150 = format_ZPPAGournayenBrayZone2_150.readFeatures(json_ZPPAGournayenBrayZone2_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAGournayenBrayZone2_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAGournayenBrayZone2_150.addFeatures(features_ZPPAGournayenBrayZone2_150);
var lyr_ZPPAGournayenBrayZone2_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAGournayenBrayZone2_150, 
                style: style_ZPPAGournayenBrayZone2_150,
                popuplayertitle: 'Zone Archéologique Gournay-en-Bray - Zone 2',
                interactive: true,
                title: '<img src="styles/legend/ZPPAGournayenBrayZone2_150.png" /> Zone Archéologique Gournay-en-Bray - Zone 2'
            });
var format_ZPPAGournayenBrayZone1_151 = new ol.format.GeoJSON();
var features_ZPPAGournayenBrayZone1_151 = format_ZPPAGournayenBrayZone1_151.readFeatures(json_ZPPAGournayenBrayZone1_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAGournayenBrayZone1_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAGournayenBrayZone1_151.addFeatures(features_ZPPAGournayenBrayZone1_151);
var lyr_ZPPAGournayenBrayZone1_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAGournayenBrayZone1_151, 
                style: style_ZPPAGournayenBrayZone1_151,
                popuplayertitle: 'Zone Archéologique Gournay-en-Bray - Zone 1',
                interactive: true,
                title: '<img src="styles/legend/ZPPAGournayenBrayZone1_151.png" /> Zone Archéologique Gournay-en-Bray - Zone 1'
            });
var format_Sitesauxabords_152 = new ol.format.GeoJSON();
var features_Sitesauxabords_152 = format_Sitesauxabords_152.readFeatures(json_Sitesauxabords_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesauxabords_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesauxabords_152.addFeatures(features_Sitesauxabords_152);
var lyr_Sitesauxabords_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesauxabords_152, 
                style: style_Sitesauxabords_152,
                popuplayertitle: 'Sites aux abords',
                interactive: true,
                title: '<img src="styles/legend/Sitesauxabords_152.png" /> Sites aux abords'
            });
var format_SUPMH_153 = new ol.format.GeoJSON();
var features_SUPMH_153 = format_SUPMH_153.readFeatures(json_SUPMH_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUPMH_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUPMH_153.addFeatures(features_SUPMH_153);
var lyr_SUPMH_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUPMH_153, 
                style: style_SUPMH_153,
                popuplayertitle: 'Périmètres Monuments Historiques',
                interactive: true,
                title: '<img src="styles/legend/SUPMH_153.png" /> Périmètres Monuments Historiques'
            });
var format_SPR_154 = new ol.format.GeoJSON();
var features_SPR_154 = format_SPR_154.readFeatures(json_SPR_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPR_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPR_154.addFeatures(features_SPR_154);
var lyr_SPR_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPR_154, 
                style: style_SPR_154,
                popuplayertitle: 'SPR',
                interactive: true,
                title: '<img src="styles/legend/SPR_154.png" /> SPR'
            });
var format_Sitesclasss_155 = new ol.format.GeoJSON();
var features_Sitesclasss_155 = format_Sitesclasss_155.readFeatures(json_Sitesclasss_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesclasss_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesclasss_155.addFeatures(features_Sitesclasss_155);
var lyr_Sitesclasss_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesclasss_155, 
                style: style_Sitesclasss_155,
                popuplayertitle: 'Sites classés',
                interactive: true,
                title: '<img src="styles/legend/Sitesclasss_155.png" /> Sites classés'
            });
var format_Sitesinscrits_156 = new ol.format.GeoJSON();
var features_Sitesinscrits_156 = format_Sitesinscrits_156.readFeatures(json_Sitesinscrits_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesinscrits_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesinscrits_156.addFeatures(features_Sitesinscrits_156);
var lyr_Sitesinscrits_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesinscrits_156, 
                style: style_Sitesinscrits_156,
                popuplayertitle: 'Sites inscrits',
                interactive: true,
                title: '<img src="styles/legend/Sitesinscrits_156.png" /> Sites inscrits'
            });
var format_Immeubles_157 = new ol.format.GeoJSON();
var features_Immeubles_157 = format_Immeubles_157.readFeatures(json_Immeubles_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Immeubles_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Immeubles_157.addFeatures(features_Immeubles_157);
var lyr_Immeubles_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Immeubles_157, 
                style: style_Immeubles_157,
                popuplayertitle: 'Monuments Historiques',
                interactive: true,
    title: 'Monuments Historiques<br />\
    <img src="styles/legend/Immeubles_157_0.png" /> Classé<br />\
    <img src="styles/legend/Immeubles_157_1.png" /> Inscrit<br />\
    <img src="styles/legend/Immeubles_157_2.png" /> Non protégé<br />\
    <img src="styles/legend/Immeubles_157_3.png" /> Partiellement Classé<br />\
    <img src="styles/legend/Immeubles_157_4.png" /> Partiellement Classé-Inscrit<br />\
    <img src="styles/legend/Immeubles_157_5.png" /> Partiellement inscrit<br />' });
var format_ZPPAindiffrencies_158 = new ol.format.GeoJSON();
var features_ZPPAindiffrencies_158 = format_ZPPAindiffrencies_158.readFeatures(json_ZPPAindiffrencies_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAindiffrencies_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAindiffrencies_158.addFeatures(features_ZPPAindiffrencies_158);
var lyr_ZPPAindiffrencies_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAindiffrencies_158, 
                style: style_ZPPAindiffrencies_158,
                popuplayertitle: 'Zones Archéologie',
                interactive: true,
                title: '<img src="styles/legend/ZPPAindiffrencies_158.png" /> Zones Archéologie'
            });
var format_ZPPAindiffrenciescentrodes_159 = new ol.format.GeoJSON();
var features_ZPPAindiffrenciescentrodes_159 = format_ZPPAindiffrenciescentrodes_159.readFeatures(json_ZPPAindiffrenciescentrodes_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAindiffrenciescentrodes_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAindiffrenciescentrodes_159.addFeatures(features_ZPPAindiffrenciescentrodes_159);
var lyr_ZPPAindiffrenciescentrodes_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAindiffrenciescentrodes_159, 
                style: style_ZPPAindiffrenciescentrodes_159,
                popuplayertitle: 'ZPPA - indifférenciées (centroïdes)',
                interactive: true,
                title: '<img src="styles/legend/ZPPAindiffrenciescentrodes_159.png" /> ZPPA - indifférenciées (centroïdes)'
            });
var format_RoutesconcdesTypeC_160 = new ol.format.GeoJSON();
var features_RoutesconcdesTypeC_160 = format_RoutesconcdesTypeC_160.readFeatures(json_RoutesconcdesTypeC_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesconcdesTypeC_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesconcdesTypeC_160.addFeatures(features_RoutesconcdesTypeC_160);
var lyr_RoutesconcdesTypeC_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesconcdesTypeC_160, 
                style: style_RoutesconcdesTypeC_160,
                popuplayertitle: 'Routes concédées - Type C',
                interactive: true,
    title: 'Routes concédées - Type C<br />\
    <img src="styles/legend/RoutesconcdesTypeC_160_0.png" /> Dépasssement du seuil réglementaire LDEN = 68 dB(A)<br />' });
var format_RoutesconcdesTypeA_161 = new ol.format.GeoJSON();
var features_RoutesconcdesTypeA_161 = format_RoutesconcdesTypeA_161.readFeatures(json_RoutesconcdesTypeA_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesconcdesTypeA_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesconcdesTypeA_161.addFeatures(features_RoutesconcdesTypeA_161);
var lyr_RoutesconcdesTypeA_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesconcdesTypeA_161, 
                style: style_RoutesconcdesTypeA_161,
                popuplayertitle: 'Routes concédées - Type A',
                interactive: true,
    title: 'Routes concédées - Type A<br />\
    <img src="styles/legend/RoutesconcdesTypeA_161_0.png" /> 55 à 60 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_161_1.png" /> 60 à 65 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_161_2.png" /> 65 à 70 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_161_3.png" /> 70 à 75 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_161_4.png" /> > 75  dB(A)<br />' });
var format_RoutesTypeC_162 = new ol.format.GeoJSON();
var features_RoutesTypeC_162 = format_RoutesTypeC_162.readFeatures(json_RoutesTypeC_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesTypeC_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesTypeC_162.addFeatures(features_RoutesTypeC_162);
var lyr_RoutesTypeC_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesTypeC_162, 
                style: style_RoutesTypeC_162,
                popuplayertitle: 'Routes - Type C',
                interactive: true,
    title: 'Routes - Type C<br />\
    <img src="styles/legend/RoutesTypeC_162_0.png" /> >68<br />\
    <img src="styles/legend/RoutesTypeC_162_1.png" /> >73<br />' });
var format_RoutesTypeA_163 = new ol.format.GeoJSON();
var features_RoutesTypeA_163 = format_RoutesTypeA_163.readFeatures(json_RoutesTypeA_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesTypeA_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesTypeA_163.addFeatures(features_RoutesTypeA_163);
var lyr_RoutesTypeA_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesTypeA_163, 
                style: style_RoutesTypeA_163,
                popuplayertitle: 'Routes - Type A',
                interactive: true,
    title: 'Routes - Type A<br />\
    <img src="styles/legend/RoutesTypeA_163_0.png" /> 55-60<br />\
    <img src="styles/legend/RoutesTypeA_163_1.png" /> 60-65<br />\
    <img src="styles/legend/RoutesTypeA_163_2.png" /> 65-70<br />\
    <img src="styles/legend/RoutesTypeA_163_3.png" /> 70-75<br />\
    <img src="styles/legend/RoutesTypeA_163_4.png" /> >75<br />' });
var format_Canalisationshydrocarbures_164 = new ol.format.GeoJSON();
var features_Canalisationshydrocarbures_164 = format_Canalisationshydrocarbures_164.readFeatures(json_Canalisationshydrocarbures_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canalisationshydrocarbures_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canalisationshydrocarbures_164.addFeatures(features_Canalisationshydrocarbures_164);
var lyr_Canalisationshydrocarbures_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canalisationshydrocarbures_164, 
                style: style_Canalisationshydrocarbures_164,
                popuplayertitle: 'Canalisations hydrocarbures',
                interactive: true,
                title: '<img src="styles/legend/Canalisationshydrocarbures_164.png" /> Canalisations hydrocarbures'
            });
var format_CanalisationsgazGRT_165 = new ol.format.GeoJSON();
var features_CanalisationsgazGRT_165 = format_CanalisationsgazGRT_165.readFeatures(json_CanalisationsgazGRT_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanalisationsgazGRT_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalisationsgazGRT_165.addFeatures(features_CanalisationsgazGRT_165);
var lyr_CanalisationsgazGRT_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalisationsgazGRT_165, 
                style: style_CanalisationsgazGRT_165,
                popuplayertitle: 'Canalisations gaz GRT',
                interactive: true,
                title: '<img src="styles/legend/CanalisationsgazGRT_165.png" /> Canalisations gaz GRT'
            });
var format_CanalisationsgazGRDF_166 = new ol.format.GeoJSON();
var features_CanalisationsgazGRDF_166 = format_CanalisationsgazGRDF_166.readFeatures(json_CanalisationsgazGRDF_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanalisationsgazGRDF_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalisationsgazGRDF_166.addFeatures(features_CanalisationsgazGRDF_166);
var lyr_CanalisationsgazGRDF_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalisationsgazGRDF_166, 
                style: style_CanalisationsgazGRDF_166,
                popuplayertitle: 'Canalisations gaz GRDF',
                interactive: true,
                title: '<img src="styles/legend/CanalisationsgazGRDF_166.png" /> Canalisations gaz GRDF'
            });
var format_LignesbassetensionsouterrainesENEDIS_167 = new ol.format.GeoJSON();
var features_LignesbassetensionsouterrainesENEDIS_167 = format_LignesbassetensionsouterrainesENEDIS_167.readFeatures(json_LignesbassetensionsouterrainesENEDIS_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LignesbassetensionsouterrainesENEDIS_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LignesbassetensionsouterrainesENEDIS_167.addFeatures(features_LignesbassetensionsouterrainesENEDIS_167);
var lyr_LignesbassetensionsouterrainesENEDIS_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LignesbassetensionsouterrainesENEDIS_167, 
                style: style_LignesbassetensionsouterrainesENEDIS_167,
                popuplayertitle: 'Lignes basse tension souterraines ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LignesbassetensionsouterrainesENEDIS_167.png" /> Lignes basse tension souterraines ENEDIS'
            });
var format_LignesbassetensionariennesENEDIS_168 = new ol.format.GeoJSON();
var features_LignesbassetensionariennesENEDIS_168 = format_LignesbassetensionariennesENEDIS_168.readFeatures(json_LignesbassetensionariennesENEDIS_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LignesbassetensionariennesENEDIS_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LignesbassetensionariennesENEDIS_168.addFeatures(features_LignesbassetensionariennesENEDIS_168);
var lyr_LignesbassetensionariennesENEDIS_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LignesbassetensionariennesENEDIS_168, 
                style: style_LignesbassetensionariennesENEDIS_168,
                popuplayertitle: 'Lignes basse tension aériennes ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LignesbassetensionariennesENEDIS_168.png" /> Lignes basse tension aériennes ENEDIS'
            });
var format_LigneshautetensionsouterrainesENEDIS_169 = new ol.format.GeoJSON();
var features_LigneshautetensionsouterrainesENEDIS_169 = format_LigneshautetensionsouterrainesENEDIS_169.readFeatures(json_LigneshautetensionsouterrainesENEDIS_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneshautetensionsouterrainesENEDIS_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneshautetensionsouterrainesENEDIS_169.addFeatures(features_LigneshautetensionsouterrainesENEDIS_169);
var lyr_LigneshautetensionsouterrainesENEDIS_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneshautetensionsouterrainesENEDIS_169, 
                style: style_LigneshautetensionsouterrainesENEDIS_169,
                popuplayertitle: 'Lignes haute tension souterraines ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LigneshautetensionsouterrainesENEDIS_169.png" /> Lignes haute tension souterraines ENEDIS'
            });
var format_LigneshautetensionariennesENEDIS_170 = new ol.format.GeoJSON();
var features_LigneshautetensionariennesENEDIS_170 = format_LigneshautetensionariennesENEDIS_170.readFeatures(json_LigneshautetensionariennesENEDIS_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneshautetensionariennesENEDIS_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneshautetensionariennesENEDIS_170.addFeatures(features_LigneshautetensionariennesENEDIS_170);
var lyr_LigneshautetensionariennesENEDIS_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneshautetensionariennesENEDIS_170, 
                style: style_LigneshautetensionariennesENEDIS_170,
                popuplayertitle: 'Lignes haute tension aériennes ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LigneshautetensionariennesENEDIS_170.png" /> Lignes haute tension aériennes ENEDIS'
            });
var format_LigneshautetensionRTE_171 = new ol.format.GeoJSON();
var features_LigneshautetensionRTE_171 = format_LigneshautetensionRTE_171.readFeatures(json_LigneshautetensionRTE_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneshautetensionRTE_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneshautetensionRTE_171.addFeatures(features_LigneshautetensionRTE_171);
var lyr_LigneshautetensionRTE_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneshautetensionRTE_171, 
                style: style_LigneshautetensionRTE_171,
                popuplayertitle: 'Lignes haute tension RTE',
                interactive: true,
                title: '<img src="styles/legend/LigneshautetensionRTE_171.png" /> Lignes haute tension RTE'
            });
var format_Postesdetransformation_172 = new ol.format.GeoJSON();
var features_Postesdetransformation_172 = format_Postesdetransformation_172.readFeatures(json_Postesdetransformation_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postesdetransformation_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postesdetransformation_172.addFeatures(features_Postesdetransformation_172);
var lyr_Postesdetransformation_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postesdetransformation_172, 
                style: style_Postesdetransformation_172,
                popuplayertitle: 'Postes de transformation',
                interactive: true,
                title: '<img src="styles/legend/Postesdetransformation_172.png" /> Postes de transformation'
            });
var format_Itinraireautre_173 = new ol.format.GeoJSON();
var features_Itinraireautre_173 = format_Itinraireautre_173.readFeatures(json_Itinraireautre_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Itinraireautre_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Itinraireautre_173.addFeatures(features_Itinraireautre_173);
var lyr_Itinraireautre_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Itinraireautre_173, 
                style: style_Itinraireautre_173,
                popuplayertitle: 'Itinéraire autre',
                interactive: true,
                title: '<img src="styles/legend/Itinraireautre_173.png" /> Itinéraire autre'
            });
var format_Voieferre_174 = new ol.format.GeoJSON();
var features_Voieferre_174 = format_Voieferre_174.readFeatures(json_Voieferre_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voieferre_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voieferre_174.addFeatures(features_Voieferre_174);
var lyr_Voieferre_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voieferre_174, 
                style: style_Voieferre_174,
                popuplayertitle: 'Voie ferrée',
                interactive: true,
                title: '<img src="styles/legend/Voieferre_174.png" /> Voie ferrée'
            });
var format_RoutesdeGrandeCirculation_175 = new ol.format.GeoJSON();
var features_RoutesdeGrandeCirculation_175 = format_RoutesdeGrandeCirculation_175.readFeatures(json_RoutesdeGrandeCirculation_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesdeGrandeCirculation_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesdeGrandeCirculation_175.addFeatures(features_RoutesdeGrandeCirculation_175);
var lyr_RoutesdeGrandeCirculation_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesdeGrandeCirculation_175, 
                style: style_RoutesdeGrandeCirculation_175,
                popuplayertitle: 'Routes de Grande Circulation',
                interactive: true,
                title: '<img src="styles/legend/RoutesdeGrandeCirculation_175.png" /> Routes de Grande Circulation'
            });
var format_Routesnumrotesounommes_176 = new ol.format.GeoJSON();
var features_Routesnumrotesounommes_176 = format_Routesnumrotesounommes_176.readFeatures(json_Routesnumrotesounommes_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesnumrotesounommes_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesnumrotesounommes_176.addFeatures(features_Routesnumrotesounommes_176);
var lyr_Routesnumrotesounommes_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesnumrotesounommes_176, 
                style: style_Routesnumrotesounommes_176,
                popuplayertitle: 'Routes numérotées ou nommées',
                interactive: true,
    title: 'Routes numérotées ou nommées<br />\
    <img src="styles/legend/Routesnumrotesounommes_176_0.png" /> Autoroute<br />\
    <img src="styles/legend/Routesnumrotesounommes_176_1.png" /> Nationale<br />\
    <img src="styles/legend/Routesnumrotesounommes_176_2.png" /> Départementale<br />\
    <img src="styles/legend/Routesnumrotesounommes_176_3.png" /> Route nommée<br />\
    <img src="styles/legend/Routesnumrotesounommes_176_4.png" /> Voie verte<br />' });
var format_Niveaudurisque_177 = new ol.format.GeoJSON();
var features_Niveaudurisque_177 = format_Niveaudurisque_177.readFeatures(json_Niveaudurisque_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveaudurisque_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveaudurisque_177.addFeatures(features_Niveaudurisque_177);
var lyr_Niveaudurisque_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveaudurisque_177, 
                style: style_Niveaudurisque_177,
                popuplayertitle: 'Niveau du risque',
                interactive: true,
    title: 'Niveau du risque<br />\
    <img src="styles/legend/Niveaudurisque_177_0.png" /> Faible<br />\
    <img src="styles/legend/Niveaudurisque_177_1.png" /> Moyen<br />\
    <img src="styles/legend/Niveaudurisque_177_2.png" /> Fort<br />' });
var format_Zonesdalas_178 = new ol.format.GeoJSON();
var features_Zonesdalas_178 = format_Zonesdalas_178.readFeatures(json_Zonesdalas_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesdalas_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesdalas_178.addFeatures(features_Zonesdalas_178);
var lyr_Zonesdalas_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesdalas_178, 
                style: style_Zonesdalas_178,
                popuplayertitle: 'Zones d\'aléas',
                interactive: true,
    title: 'Zones d\'aléas<br />\
    <img src="styles/legend/Zonesdalas_178_0.png" /> Faible<br />\
    <img src="styles/legend/Zonesdalas_178_1.png" /> Moyen<br />\
    <img src="styles/legend/Zonesdalas_178_2.png" /> Fort<br />\
    <img src="styles/legend/Zonesdalas_178_3.png" /> Vigilance<br />\
    <img src="styles/legend/Zonesdalas_178_4.png" /> Nappe<br />' });
var format_Zonesrglementaires_179 = new ol.format.GeoJSON();
var features_Zonesrglementaires_179 = format_Zonesrglementaires_179.readFeatures(json_Zonesrglementaires_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesrglementaires_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesrglementaires_179.addFeatures(features_Zonesrglementaires_179);
var lyr_Zonesrglementaires_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesrglementaires_179, 
                style: style_Zonesrglementaires_179,
                popuplayertitle: 'Zones réglementaires',
                interactive: true,
    title: 'Zones réglementaires<br />\
    <img src="styles/legend/Zonesrglementaires_179_0.png" /> Bleu clair<br />\
    <img src="styles/legend/Zonesrglementaires_179_1.png" /> Rouge<br />\
    <img src="styles/legend/Zonesrglementaires_179_2.png" /> Violet<br />' });
var format_Ruissellement_180 = new ol.format.GeoJSON();
var features_Ruissellement_180 = format_Ruissellement_180.readFeatures(json_Ruissellement_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruissellement_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruissellement_180.addFeatures(features_Ruissellement_180);
var lyr_Ruissellement_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruissellement_180, 
                style: style_Ruissellement_180,
                popuplayertitle: 'Ruissellement',
                interactive: true,
                title: '<img src="styles/legend/Ruissellement_180.png" /> Ruissellement'
            });
var format_Secteurs_181 = new ol.format.GeoJSON();
var features_Secteurs_181 = format_Secteurs_181.readFeatures(json_Secteurs_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_181.addFeatures(features_Secteurs_181);
var lyr_Secteurs_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_181, 
                style: style_Secteurs_181,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_181_0.png" /> 1<br />\
    <img src="styles/legend/Secteurs_181_1.png" /> 2<br />\
    <img src="styles/legend/Secteurs_181_2.png" /> 3<br />\
    <img src="styles/legend/Secteurs_181_3.png" /> 4<br />' });
var format_ICPE_182 = new ol.format.GeoJSON();
var features_ICPE_182 = format_ICPE_182.readFeatures(json_ICPE_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICPE_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICPE_182.addFeatures(features_ICPE_182);
var lyr_ICPE_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICPE_182, 
                style: style_ICPE_182,
                popuplayertitle: 'ICPE',
                interactive: true,
    title: 'ICPE<br />\
    <img src="styles/legend/ICPE_182_0.png" /> Activités des sièges sociaux ; conseil de gestion<br />\
    <img src="styles/legend/ICPE_182_1.png" /> Collecte des déchets/traitements des eaux usées<br />\
    <img src="styles/legend/ICPE_182_2.png" /> Commerce<br />\
    <img src="styles/legend/ICPE_182_3.png" /> Culture et production animale, chasse et services annexes<br />\
    <img src="styles/legend/ICPE_182_4.png" /> Dépollution et autres services de gestion des déchets<br />\
    <img src="styles/legend/ICPE_182_5.png" /> Fabrications/manufactures <br />\
    <img src="styles/legend/ICPE_182_6.png" /> Génie civil<br />\
    <img src="styles/legend/ICPE_182_7.png" /> Industries<br />\
    <img src="styles/legend/ICPE_182_8.png" /> Production et distribution d\'électricité, de gaz, de vapeur et d\'air conditionné<br />\
    <img src="styles/legend/ICPE_182_9.png" /> Entreprises de travaux/constructions<br />' });
var format_SitesBASOL_183 = new ol.format.GeoJSON();
var features_SitesBASOL_183 = format_SitesBASOL_183.readFeatures(json_SitesBASOL_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesBASOL_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesBASOL_183.addFeatures(features_SitesBASOL_183);
var lyr_SitesBASOL_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesBASOL_183, 
                style: style_SitesBASOL_183,
                popuplayertitle: 'Sites BASOL',
                interactive: true,
                title: '<img src="styles/legend/SitesBASOL_183.png" /> Sites BASOL'
            });
var format_Sitespollus_184 = new ol.format.GeoJSON();
var features_Sitespollus_184 = format_Sitespollus_184.readFeatures(json_Sitespollus_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitespollus_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitespollus_184.addFeatures(features_Sitespollus_184);
var lyr_Sitespollus_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitespollus_184, 
                style: style_Sitespollus_184,
                popuplayertitle: 'Sites pollués',
                interactive: true,
                title: '<img src="styles/legend/Sitespollus_184.png" /> Sites pollués'
            });
var format_Zonesimpermables_185 = new ol.format.GeoJSON();
var features_Zonesimpermables_185 = format_Zonesimpermables_185.readFeatures(json_Zonesimpermables_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesimpermables_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesimpermables_185.addFeatures(features_Zonesimpermables_185);
var lyr_Zonesimpermables_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesimpermables_185, 
                style: style_Zonesimpermables_185,
                popuplayertitle: 'Zones imperméables',
                interactive: true,
                title: '<img src="styles/legend/Zonesimpermables_185.png" /> Zones imperméables'
            });
var format_Remontesdenappes_186 = new ol.format.GeoJSON();
var features_Remontesdenappes_186 = format_Remontesdenappes_186.readFeatures(json_Remontesdenappes_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Remontesdenappes_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Remontesdenappes_186.addFeatures(features_Remontesdenappes_186);
var lyr_Remontesdenappes_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Remontesdenappes_186, 
                style: style_Remontesdenappes_186,
                popuplayertitle: 'Remontées de nappes',
                interactive: true,
    title: 'Remontées de nappes<br />\
    <img src="styles/legend/Remontesdenappes_186_0.png" /> Zones potentiellement sujettes aux débordements de nappe<br />\
    <img src="styles/legend/Remontesdenappes_186_1.png" /> Zones potentiellement sujettes aux inondations de cave<br />' });
var format_ZNIEFFtype2_187 = new ol.format.GeoJSON();
var features_ZNIEFFtype2_187 = format_ZNIEFFtype2_187.readFeatures(json_ZNIEFFtype2_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFtype2_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFtype2_187.addFeatures(features_ZNIEFFtype2_187);
var lyr_ZNIEFFtype2_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFtype2_187, 
                style: style_ZNIEFFtype2_187,
                popuplayertitle: 'ZNIEFF type 2',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFFtype2_187.png" /> ZNIEFF type 2'
            });
var format_ZNIEFFtype1_188 = new ol.format.GeoJSON();
var features_ZNIEFFtype1_188 = format_ZNIEFFtype1_188.readFeatures(json_ZNIEFFtype1_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFtype1_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFtype1_188.addFeatures(features_ZNIEFFtype1_188);
var lyr_ZNIEFFtype1_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFtype1_188, 
                style: style_ZNIEFFtype1_188,
                popuplayertitle: 'ZNIEFF type 1',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFFtype1_188.png" /> ZNIEFF type 1'
            });
var format_Zoneshumides_189 = new ol.format.GeoJSON();
var features_Zoneshumides_189 = format_Zoneshumides_189.readFeatures(json_Zoneshumides_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_189.addFeatures(features_Zoneshumides_189);
var lyr_Zoneshumides_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_189, 
                style: style_Zoneshumides_189,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_189.png" /> Zones humides'
            });
var format_Natura2000_190 = new ol.format.GeoJSON();
var features_Natura2000_190 = format_Natura2000_190.readFeatures(json_Natura2000_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura2000_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura2000_190.addFeatures(features_Natura2000_190);
var lyr_Natura2000_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natura2000_190, 
                style: style_Natura2000_190,
                popuplayertitle: 'Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/Natura2000_190.png" /> Natura 2000'
            });
var format_Cimetire_191 = new ol.format.GeoJSON();
var features_Cimetire_191 = format_Cimetire_191.readFeatures(json_Cimetire_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cimetire_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cimetire_191.addFeatures(features_Cimetire_191);
var lyr_Cimetire_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cimetire_191,
maxResolution:7.00111653806549,
 
                style: style_Cimetire_191,
                popuplayertitle: 'Cimetière',
                interactive: true,
                title: '<img src="styles/legend/Cimetire_191.png" /> Cimetière'
            });
var format_Rservoir_192 = new ol.format.GeoJSON();
var features_Rservoir_192 = format_Rservoir_192.readFeatures(json_Rservoir_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoir_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoir_192.addFeatures(features_Rservoir_192);
var lyr_Rservoir_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoir_192,
maxResolution:7.00111653806549,
 
                style: style_Rservoir_192,
                popuplayertitle: 'Réservoir',
                interactive: true,
                title: '<img src="styles/legend/Rservoir_192.png" /> Réservoir'
            });
var format_Terraindesport_193 = new ol.format.GeoJSON();
var features_Terraindesport_193 = format_Terraindesport_193.readFeatures(json_Terraindesport_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraindesport_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraindesport_193.addFeatures(features_Terraindesport_193);
var lyr_Terraindesport_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terraindesport_193,
maxResolution:7.00111653806549,
 
                style: style_Terraindesport_193,
                popuplayertitle: 'Terrain de sport',
                interactive: true,
                title: '<img src="styles/legend/Terraindesport_193.png" /> Terrain de sport'
            });
var format_Monument_194 = new ol.format.GeoJSON();
var features_Monument_194 = format_Monument_194.readFeatures(json_Monument_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monument_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monument_194.addFeatures(features_Monument_194);
var lyr_Monument_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monument_194,
maxResolution:7.00111653806549,
 
                style: style_Monument_194,
                popuplayertitle: 'Monument',
                interactive: true,
                title: '<img src="styles/legend/Monument_194.png" /> Monument'
            });
var format_Indiffrenci_195 = new ol.format.GeoJSON();
var features_Indiffrenci_195 = format_Indiffrenci_195.readFeatures(json_Indiffrenci_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indiffrenci_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indiffrenci_195.addFeatures(features_Indiffrenci_195);
var lyr_Indiffrenci_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indiffrenci_195,
maxResolution:7.00111653806549,
 
                style: style_Indiffrenci_195,
                popuplayertitle: 'Indifférencié',
                interactive: true,
                title: '<img src="styles/legend/Indiffrenci_195.png" /> Indifférencié'
            });
var format_Industrielagricoleoucommercial_196 = new ol.format.GeoJSON();
var features_Industrielagricoleoucommercial_196 = format_Industrielagricoleoucommercial_196.readFeatures(json_Industrielagricoleoucommercial_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrielagricoleoucommercial_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrielagricoleoucommercial_196.addFeatures(features_Industrielagricoleoucommercial_196);
var lyr_Industrielagricoleoucommercial_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrielagricoleoucommercial_196,
maxResolution:7.00111653806549,
 
                style: style_Industrielagricoleoucommercial_196,
                popuplayertitle: 'Industriel, agricole ou commercial',
                interactive: true,
                title: '<img src="styles/legend/Industrielagricoleoucommercial_196.png" /> Industriel, agricole ou commercial'
            });
var format_Constructionsponctuelles_197 = new ol.format.GeoJSON();
var features_Constructionsponctuelles_197 = format_Constructionsponctuelles_197.readFeatures(json_Constructionsponctuelles_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constructionsponctuelles_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constructionsponctuelles_197.addFeatures(features_Constructionsponctuelles_197);
var lyr_Constructionsponctuelles_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Constructionsponctuelles_197,
maxResolution:7.00111653806549,
 
                style: style_Constructionsponctuelles_197,
                popuplayertitle: 'Constructions ponctuelles',
                interactive: true,
                title: '<img src="styles/legend/Constructionsponctuelles_197.png" /> Constructions ponctuelles'
            });
var format_Pylne_198 = new ol.format.GeoJSON();
var features_Pylne_198 = format_Pylne_198.readFeatures(json_Pylne_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pylne_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pylne_198.addFeatures(features_Pylne_198);
var lyr_Pylne_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pylne_198, 
                style: style_Pylne_198,
                popuplayertitle: 'Pylône',
                interactive: true,
                title: '<img src="styles/legend/Pylne_198.png" /> Pylône'
            });
var format_CCdes4Rivires_199 = new ol.format.GeoJSON();
var features_CCdes4Rivires_199 = format_CCdes4Rivires_199.readFeatures(json_CCdes4Rivires_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCdes4Rivires_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCdes4Rivires_199.addFeatures(features_CCdes4Rivires_199);
var lyr_CCdes4Rivires_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCdes4Rivires_199, 
                style: style_CCdes4Rivires_199,
                popuplayertitle: 'CC des 4 Rivières',
                interactive: true,
                title: '<img src="styles/legend/CCdes4Rivires_199.png" /> CC des 4 Rivières'
            });
var format_CCBrayEawy_200 = new ol.format.GeoJSON();
var features_CCBrayEawy_200 = format_CCBrayEawy_200.readFeatures(json_CCBrayEawy_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCBrayEawy_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCBrayEawy_200.addFeatures(features_CCBrayEawy_200);
var lyr_CCBrayEawy_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCBrayEawy_200, 
                style: style_CCBrayEawy_200,
                popuplayertitle: 'CC Bray-Eawy',
                interactive: true,
                title: '<img src="styles/legend/CCBrayEawy_200.png" /> CC Bray-Eawy'
            });
var format_CCdeLondinieres_201 = new ol.format.GeoJSON();
var features_CCdeLondinieres_201 = format_CCdeLondinieres_201.readFeatures(json_CCdeLondinieres_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCdeLondinieres_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCdeLondinieres_201.addFeatures(features_CCdeLondinieres_201);
var lyr_CCdeLondinieres_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCdeLondinieres_201, 
                style: style_CCdeLondinieres_201,
                popuplayertitle: 'CC de Londinieres',
                interactive: true,
                title: '<img src="styles/legend/CCdeLondinieres_201.png" /> CC de Londinieres'
            });
var format_Parcellescadastrales_202 = new ol.format.GeoJSON();
var features_Parcellescadastrales_202 = format_Parcellescadastrales_202.readFeatures(json_Parcellescadastrales_202, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcellescadastrales_202 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcellescadastrales_202.addFeatures(features_Parcellescadastrales_202);
var lyr_Parcellescadastrales_202 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcellescadastrales_202,
maxResolution:7.00111653806549,
 
                style: style_Parcellescadastrales_202,
                popuplayertitle: 'Parcelles cadastrales',
                interactive: true,
                title: '<img src="styles/legend/Parcellescadastrales_202.png" /> Parcelles cadastrales'
            });
var format_Communesassociesoudlgues_203 = new ol.format.GeoJSON();
var features_Communesassociesoudlgues_203 = format_Communesassociesoudlgues_203.readFeatures(json_Communesassociesoudlgues_203, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesassociesoudlgues_203 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesassociesoudlgues_203.addFeatures(features_Communesassociesoudlgues_203);
var lyr_Communesassociesoudlgues_203 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesassociesoudlgues_203, 
                style: style_Communesassociesoudlgues_203,
                popuplayertitle: 'Communes associées ou déléguées',
                interactive: false,
                title: '<img src="styles/legend/Communesassociesoudlgues_203.png" /> Communes associées ou déléguées'
            });
var format_CommunesadhrentesADS_204 = new ol.format.GeoJSON();
var features_CommunesadhrentesADS_204 = format_CommunesadhrentesADS_204.readFeatures(json_CommunesadhrentesADS_204, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesadhrentesADS_204 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesadhrentesADS_204.addFeatures(features_CommunesadhrentesADS_204);
var lyr_CommunesadhrentesADS_204 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesadhrentesADS_204, 
                style: style_CommunesadhrentesADS_204,
                popuplayertitle: 'Communes adhérentes ADS',
                interactive: true,
                title: '<img src="styles/legend/CommunesadhrentesADS_204.png" /> Communes adhérentes ADS'
            });
var format_Communes_205 = new ol.format.GeoJSON();
var features_Communes_205 = format_Communes_205.readFeatures(json_Communes_205, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_205 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_205.addFeatures(features_Communes_205);
var lyr_Communes_205 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_205, 
                style: style_Communes_205,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_205.png" /> Communes'
            });
var format_Nomdescommunes_206 = new ol.format.GeoJSON();
var features_Nomdescommunes_206 = format_Nomdescommunes_206.readFeatures(json_Nomdescommunes_206, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdescommunes_206 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdescommunes_206.addFeatures(features_Nomdescommunes_206);
var lyr_Nomdescommunes_206 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdescommunes_206, 
                style: style_Nomdescommunes_206,
                popuplayertitle: 'Nom des communes',
                interactive: false,
                title: '<img src="styles/legend/Nomdescommunes_206.png" /> Nom des communes'
            });
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_PETRduPaysdeBray_1,lyr_CCdes4Rivires_199,lyr_CCBrayEawy_200,lyr_CCdeLondinieres_201,lyr_Parcellescadastrales_202,lyr_Communesassociesoudlgues_203,lyr_CommunesadhrentesADS_204,lyr_Communes_205,lyr_Nomdescommunes_206,],
                                fold: 'open',
                                title: 'Limites administratives'});
var group_Bti = new ol.layer.Group({
                                layers: [lyr_Cimetire_191,lyr_Rservoir_192,lyr_Terraindesport_193,lyr_Monument_194,lyr_Indiffrenci_195,lyr_Industrielagricoleoucommercial_196,lyr_Constructionsponctuelles_197,lyr_Pylne_198,],
                                fold: 'close',
                                title: 'Bâti'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_ZNIEFFtype2_187,lyr_ZNIEFFtype1_188,lyr_Zoneshumides_189,lyr_Natura2000_190,],
                                fold: 'close',
                                title: 'Zonages environnementaux'});
var group_Risqueshydrologiques = new ol.layer.Group({
                                layers: [lyr_Remontesdenappes_186,],
                                fold: 'close',
                                title: 'Risques hydrologiques'});
var group_Risquesindustriels = new ol.layer.Group({
                                layers: [lyr_ICPE_182,lyr_SitesBASOL_183,lyr_Sitespollus_184,],
                                fold: 'close',
                                title: 'Risques industriels'});
var group_AZIVarenne = new ol.layer.Group({
                                layers: [lyr_Secteurs_181,],
                                fold: 'close',
                                title: 'AZI Varenne'});
var group_PPRiCaillyAubetteRobec = new ol.layer.Group({
                                layers: [lyr_Zonesdalas_178,lyr_Zonesrglementaires_179,lyr_Ruissellement_180,],
                                fold: 'close',
                                title: 'PPRi Cailly-Aubette-Robec'});
var group_Retraitgonflementdesargiles = new ol.layer.Group({
                                layers: [lyr_Niveaudurisque_177,],
                                fold: 'close',
                                title: 'Retrait-gonflement des argiles'});
var group_Voiesdecommunication = new ol.layer.Group({
                                layers: [lyr_Itinraireautre_173,lyr_Voieferre_174,lyr_RoutesdeGrandeCirculation_175,lyr_Routesnumrotesounommes_176,],
                                fold: 'close',
                                title: 'Voies de communication'});
var group_Electricit = new ol.layer.Group({
                                layers: [lyr_LignesbassetensionsouterrainesENEDIS_167,lyr_LignesbassetensionariennesENEDIS_168,lyr_LigneshautetensionsouterrainesENEDIS_169,lyr_LigneshautetensionariennesENEDIS_170,lyr_LigneshautetensionRTE_171,lyr_Postesdetransformation_172,],
                                fold: 'close',
                                title: 'Electricité'});
var group_Gaz = new ol.layer.Group({
                                layers: [lyr_CanalisationsgazGRT_165,lyr_CanalisationsgazGRDF_166,],
                                fold: 'close',
                                title: 'Gaz'});
var group_Hydrocarbures = new ol.layer.Group({
                                layers: [lyr_Canalisationshydrocarbures_164,],
                                fold: 'close',
                                title: 'Hydrocarbures'});
var group_Bruit = new ol.layer.Group({
                                layers: [lyr_RoutesconcdesTypeC_160,lyr_RoutesconcdesTypeA_161,lyr_RoutesTypeC_162,lyr_RoutesTypeA_163,],
                                fold: 'close',
                                title: 'Bruit'});
var group_Patrimoine = new ol.layer.Group({
                                layers: [lyr_ZPPAGournayenBrayZone2_150,lyr_ZPPAGournayenBrayZone1_151,lyr_SUPMH_153,lyr_SPR_154,lyr_Sitesclasss_155,lyr_Sitesinscrits_156,lyr_Immeubles_157,lyr_ZPPAindiffrencies_158,],
                                fold: 'close',
                                title: 'Patrimoine'});
var group_Elmentsnaturels = new ol.layer.Group({
                                layers: [lyr_Fortspubliques_142,lyr_Haies_143,lyr_Trononshydrographiques_144,lyr_Surfaceshydrographiques_145,lyr_Dtailshydrographiques_146,lyr_MaresPRAM_147,lyr_Bassinversanttopographique_148,lyr_Toponymiehydrographie_149,],
                                fold: 'close',
                                title: 'Éléments naturels'});
var group_Captagesdeau = new ol.layer.Group({
                                layers: [lyr_PPE_139,lyr_PPI_140,lyr_PPR_141,],
                                fold: 'close',
                                title: 'Captages d\'eau'});
var group_Servicesetactivits2024 = new ol.layer.Group({
                                layers: [lyr_Zonedactivitetdeservice_137,lyr_ERP_138,],
                                fold: 'close',
                                title: 'Services et activités 2024'});
var group_EnquteagricoleLaFeuillie = new ol.layer.Group({
                                layers: [lyr_Primtredeprotectionincendie100m_131,lyr_Primtredeprotectionincendie15m_132,lyr_lotsanonymesPAC_133,lyr_Corpsdeferme_134,lyr_Distancedereculautourdubti_135,lyr_Btiagricole_136,],
                                fold: 'close',
                                title: 'Enquête agricole La Feuillie'});
var group_EnquteagricoleLesGrandesVentes = new ol.layer.Group({
                                layers: [lyr_Corpsdeferme_128,lyr_Distancedereculautourdubti_129,lyr_Btiagricole_130,],
                                fold: 'close',
                                title: 'Enquête agricole Les Grandes-Ventes'});
var group_BzancourtCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_123,lyr_Prescriptionssurfaciques_124,lyr_Prescriptionslinaires_125,lyr_Prescriptionsponctuelles_126,lyr_Codessecteurs_127,],
                                fold: 'close',
                                title: 'Bézancourt - Carte Communale'});
var group_BoscMesnilCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_121,lyr_Codessecteurs_122,],
                                fold: 'close',
                                title: 'Bosc-Mesnil - Carte Communale'});
var group_BouellesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_119,lyr_Codessecteurs_120,],
                                fold: 'close',
                                title: 'Bouelles - Carte Communale'});
var group_BoscBrengerPLU = new ol.layer.Group({
                                layers: [lyr_Prescriptionssurfaciques_118,],
                                fold: 'close',
                                title: 'Bosc-Bérenger - PLU'});
var group_BrmontierMervalCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_113,lyr_Prescriptionssurfaciques_114,lyr_Prescriptionslinaires_115,lyr_Prescriptionsponctuelles_116,lyr_Codessecteurs_117,],
                                fold: 'close',
                                title: 'Brémontier-Merval - Carte Communale'});
var group_CallengevilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_112,],
                                fold: 'close',
                                title: 'Callengeville - Carte Communale'});
var group_CompainvilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_110,lyr_Codessecteurs_111,],
                                fold: 'close',
                                title: 'Compainville - Carte Communale'});
var group_CritotPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_105,lyr_DroitdePremptionurbain_106,lyr_Prescriptionssurfaciques_107,lyr_Prescriptionsponctuelles_108,lyr_Codessecteurs_109,],
                                fold: 'close',
                                title: 'Critot - PLU'});
var group_CuySaintFiacreCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_102,lyr_DroitdePremption_103,lyr_Codessecteurs_104,],
                                fold: 'close',
                                title: 'Cuy-Saint-Fiacre - Carte Communale'});
var group_DampierreenBrayCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_99,lyr_Droitdepremption_100,lyr_Codessecteurs_101,],
                                fold: 'close',
                                title: 'Dampierre-en-Bray - Carte Communale'});
var group_ElbeufenBrayCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_96,lyr_Bois_97,lyr_Codessecteurs_98,],
                                fold: 'close',
                                title: 'Elbeuf-en-Bray - Carte Communale'});
var group_ErnemontlaVilletteCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_93,lyr_Espaceboisclass_94,lyr_Codessecteurs_95,],
                                fold: 'close',
                                title: 'Ernemont-la-Villette - Carte Communale'});
var group_EsclavellesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_91,lyr_Codessecteurs_92,],
                                fold: 'close',
                                title: 'Esclavelles - Carte Communale'});
var group_FerriresenBrayPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_86,lyr_Prescriptionssurfaciques_87,lyr_Prescriptionslinaires_88,lyr_Prescriptionsponctuelles_89,lyr_Codessecteurs_90,],
                                fold: 'close',
                                title: 'Ferrières-en-Bray - PLU'});
var group_FesquesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_84,lyr_Codessecteurs_85,],
                                fold: 'close',
                                title: 'Fesques - Carte Communale'});
var group_ForgeslesEauxPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_77,lyr_Prescriptionssurfaciques2_78,lyr_Prescriptionssurfaciques1_79,lyr_Ruissellement_80,lyr_Prescriptionslinaires_81,lyr_Prescriptionsponctuelles_82,lyr_Codessecteurs_83,],
                                fold: 'close',
                                title: 'Forges-les-Eaux - PLU'});
var group_FryCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_75,lyr_Codessecteurs_76,],
                                fold: 'close',
                                title: 'Fry - Carte Communale'});
var group_GaillefontaineCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_73,lyr_Codessecteurs_74,],
                                fold: 'close',
                                title: 'Gaillefontaine - Carte Communale'});
var group_GournayenBrayPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_68,lyr_Prescriptionssurfaciques_69,lyr_Prescriptionslinaires_70,lyr_Prescriptionsponctuelles_71,lyr_Codessecteurs_72,],
                                fold: 'close',
                                title: 'Gournay-en-Bray - PLU'});
var group_LaFeuilliePLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_63,lyr_Prescriptionssurfaciques_64,lyr_Prescriptionslinaires_65,lyr_Prescriptionsponctuelles_66,lyr_Codessecteurs_67,],
                                fold: 'close',
                                title: 'La Feuillie - PLU'});
var group_LesGrandesVentesPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_58,lyr_Prescriptionssurfaciques_59,lyr_Prescriptionslinaires_60,lyr_Prescriptionsponctuelles_61,lyr_Codessecteurs_62,],
                                fold: 'close',
                                title: 'Les Grandes-Ventes - PLU'});
var group_MassyCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_57,],
                                fold: 'close',
                                title: 'Massy - Carte Communale'});
var group_MathonvilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_55,lyr_Codessecteurs_56,],
                                fold: 'close',
                                title: 'Mathonville - Carte Communale'});
var group_MaucomblePLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_49,lyr_Prescriptionssurfaciques2_50,lyr_Prescriptionssurfaciques1_51,lyr_Prescriptionslinaire_52,lyr_Prescriptionsponctuelles_53,lyr_Codessecteurs_54,],
                                fold: 'close',
                                title: 'Maucomble - PLU'});
var group_MsanguevilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_47,lyr_Codessecteurs_48,],
                                fold: 'close',
                                title: 'Mésangueville - Carte Communale'});
var group_MolagniesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_45,lyr_Codessecteurs_46,],
                                fold: 'close',
                                title: 'Molagnies - Carte Communale'});
var group_MontrolierCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_43,lyr_Codessecteurs_44,],
                                fold: 'close',
                                title: 'Montérolier - Carte Communale'});
var group_MontrotyCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_41,lyr_Codessecteurs_42,],
                                fold: 'close',
                                title: 'Montroty - Carte Communale'});
var group_NesleHodengCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_39,lyr_Codessecteurs_40,],
                                fold: 'close',
                                title: 'Nesle-Hodeng - Carte Communale'});
var group_NeufMarchCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_37,lyr_Codessecteurs_38,],
                                fold: 'close',
                                title: 'Neuf-Marché - Carte Communale'});
var group_OsmoySaintValryPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_32,lyr_Prescriptionssurfaciques_33,lyr_Prescriptionslinaires_34,lyr_Prescriptionsponctuelles_35,lyr_Codessecteurs_36,],
                                fold: 'close',
                                title: 'Osmoy-Saint-Valéry - PLU'});
var group_RocquemontCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_29,lyr_Prescriptionssurfaciques_30,lyr_Codessecteurs_31,],
                                fold: 'close',
                                title: 'Rocquemont - Carte Communale'});
var group_RosayCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_26,lyr_Boisprotgs_27,lyr_Codessecteurs_28,],
                                fold: 'close',
                                title: 'Rosay - Carte Communale'});
var group_SaintLucienPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_21,lyr_Prescriptionssurfaciques_22,lyr_Prescriptionslinaires_23,lyr_Prescriptionsponctuelles_24,lyr_Codessecteurs_25,],
                                fold: 'close',
                                title: 'Saint-Lucien - PLU'});
var group_SainteGeneviveCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_19,lyr_Codessecteurs_20,],
                                fold: 'close',
                                title: 'Sainte-Geneviève - Carte Communale'});
var group_SaintGermainsurEaulneCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_17,lyr_Codessecteurs_18,],
                                fold: 'close',
                                title: 'Saint-Germain-sur-Eaulne - Carte Communale'});
var group_SaintSansPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_10,lyr_Prescriptionssurfaciques_11,lyr_Primtresdeprotectiondecaptage_12,lyr_Prescriptionslinaires_13,lyr_Ruissellement_14,lyr_Prescriptionsponctuelles_15,lyr_Codessecteurs_16,],
                                fold: 'close',
                                title: 'Saint-Saëns - PLU'});
var group_SaintSaireCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_8,lyr_Codessecteurs_9,],
                                fold: 'close',
                                title: 'Saint-Saire - Carte Communale'});
var group_SigyenBrayPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_3,lyr_Prescriptionssurfaciques_4,lyr_Prescriptionslinaires_5,lyr_Prescriptionsponctuelles_6,lyr_Codessecteurs_7,],
                                fold: 'close',
                                title: 'Sigy-en-Bray - PLU'});
var group_SommeryCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_2,],
                                fold: 'close',
                                title: 'Sommery - Carte Communale'});
var group_DocumentsdUrbanisme = new ol.layer.Group({
    title: '<hr style="border-top:2px solid #555;margin:6px 0;"><div style="text-align:center;font-weight:bold;color:#333;">Documents d’urbanisme - PLU(i), cartes communales</div>',
    fold: 'close',
    layers: [
        group_SommeryCarteCommunale,
		group_SigyenBrayPLU,
		group_SaintSaireCarteCommunale,
group_SaintSansPLU,
group_SaintGermainsurEaulneCarteCommunale,
group_SainteGeneviveCarteCommunale,
group_SaintLucienPLU,
group_RosayCarteCommunale,
group_RocquemontCarteCommunale,
group_OsmoySaintValryPLU,
group_NeufMarchCarteCommunale,
group_NesleHodengCarteCommunale,
group_MontrotyCarteCommunale,
group_MontrolierCarteCommunale,
group_MolagniesCarteCommunale,
group_MsanguevilleCarteCommunale,
group_MaucomblePLU,
group_MathonvilleCarteCommunale,
group_MassyCarteCommunale,
group_LesGrandesVentesPLU,
group_LaFeuilliePLU,
group_GournayenBrayPLU,
group_GaillefontaineCarteCommunale,
group_FryCarteCommunale,
group_ForgeslesEauxPLU,
group_FesquesCarteCommunale,
group_FerriresenBrayPLU,
group_EsclavellesCarteCommunale,
group_ErnemontlaVilletteCarteCommunale,
group_ElbeufenBrayCarteCommunale,
group_DampierreenBrayCarteCommunale,
group_CuySaintFiacreCarteCommunale,
group_CritotPLU,
group_CompainvilleCarteCommunale,
group_CallengevilleCarteCommunale,
group_BrmontierMervalCarteCommunale,
group_BouellesCarteCommunale,
group_BoscMesnilCarteCommunale,
group_BzancourtCarteCommunale
    ]
});

lyr_BDOrthoIGN_0.setVisible(true);lyr_PETRduPaysdeBray_1.setVisible(true);lyr_Secteurs_2.setVisible(false);lyr_Secteurs_3.setVisible(false);lyr_Prescriptionssurfaciques_4.setVisible(false);lyr_Prescriptionslinaires_5.setVisible(false);lyr_Prescriptionsponctuelles_6.setVisible(false);lyr_Codessecteurs_7.setVisible(false);lyr_Secteurs_8.setVisible(false);lyr_Codessecteurs_9.setVisible(false);lyr_Secteurs_10.setVisible(false);lyr_Prescriptionssurfaciques_11.setVisible(false);lyr_Primtresdeprotectiondecaptage_12.setVisible(false);lyr_Prescriptionslinaires_13.setVisible(false);lyr_Ruissellement_14.setVisible(false);lyr_Prescriptionsponctuelles_15.setVisible(false);lyr_Codessecteurs_16.setVisible(false);lyr_Secteurs_17.setVisible(false);lyr_Codessecteurs_18.setVisible(false);lyr_Secteurs_19.setVisible(false);lyr_Codessecteurs_20.setVisible(false);lyr_Secteurs_21.setVisible(false);lyr_Prescriptionssurfaciques_22.setVisible(false);lyr_Prescriptionslinaires_23.setVisible(false);lyr_Prescriptionsponctuelles_24.setVisible(false);lyr_Codessecteurs_25.setVisible(false);lyr_Secteurs_26.setVisible(false);lyr_Boisprotgs_27.setVisible(false);lyr_Codessecteurs_28.setVisible(false);lyr_Secteurs_29.setVisible(false);lyr_Prescriptionssurfaciques_30.setVisible(false);lyr_Codessecteurs_31.setVisible(false);lyr_Secteurs_32.setVisible(false);lyr_Prescriptionssurfaciques_33.setVisible(false);lyr_Prescriptionslinaires_34.setVisible(false);lyr_Prescriptionsponctuelles_35.setVisible(false);lyr_Codessecteurs_36.setVisible(false);lyr_Secteurs_37.setVisible(false);lyr_Codessecteurs_38.setVisible(false);lyr_Secteurs_39.setVisible(false);lyr_Codessecteurs_40.setVisible(false);lyr_Secteurs_41.setVisible(false);lyr_Codessecteurs_42.setVisible(false);lyr_Secteurs_43.setVisible(false);lyr_Codessecteurs_44.setVisible(false);lyr_Secteurs_45.setVisible(false);lyr_Codessecteurs_46.setVisible(false);lyr_Secteurs_47.setVisible(false);lyr_Codessecteurs_48.setVisible(false);lyr_Secteurs_49.setVisible(false);lyr_Prescriptionssurfaciques2_50.setVisible(false);lyr_Prescriptionssurfaciques1_51.setVisible(false);lyr_Prescriptionslinaire_52.setVisible(false);lyr_Prescriptionsponctuelles_53.setVisible(false);lyr_Codessecteurs_54.setVisible(false);lyr_Secteurs_55.setVisible(false);lyr_Codessecteurs_56.setVisible(false);lyr_Secteurs_57.setVisible(false);lyr_Secteurs_58.setVisible(false);lyr_Prescriptionssurfaciques_59.setVisible(false);lyr_Prescriptionslinaires_60.setVisible(false);lyr_Prescriptionsponctuelles_61.setVisible(false);lyr_Codessecteurs_62.setVisible(false);lyr_Secteurs_63.setVisible(false);lyr_Prescriptionssurfaciques_64.setVisible(false);lyr_Prescriptionslinaires_65.setVisible(false);lyr_Prescriptionsponctuelles_66.setVisible(false);lyr_Codessecteurs_67.setVisible(false);lyr_Secteurs_68.setVisible(false);lyr_Prescriptionssurfaciques_69.setVisible(false);lyr_Prescriptionslinaires_70.setVisible(false);lyr_Prescriptionsponctuelles_71.setVisible(false);lyr_Codessecteurs_72.setVisible(false);lyr_Secteurs_73.setVisible(false);lyr_Codessecteurs_74.setVisible(false);lyr_Secteurs_75.setVisible(false);lyr_Codessecteurs_76.setVisible(false);lyr_Secteurs_77.setVisible(false);lyr_Prescriptionssurfaciques2_78.setVisible(false);lyr_Prescriptionssurfaciques1_79.setVisible(false);lyr_Ruissellement_80.setVisible(false);lyr_Prescriptionslinaires_81.setVisible(false);lyr_Prescriptionsponctuelles_82.setVisible(false);lyr_Codessecteurs_83.setVisible(false);lyr_Secteurs_84.setVisible(false);lyr_Codessecteurs_85.setVisible(false);lyr_Secteurs_86.setVisible(false);lyr_Prescriptionssurfaciques_87.setVisible(false);lyr_Prescriptionslinaires_88.setVisible(false);lyr_Prescriptionsponctuelles_89.setVisible(false);lyr_Codessecteurs_90.setVisible(false);lyr_Secteurs_91.setVisible(false);lyr_Codessecteurs_92.setVisible(false);lyr_Secteurs_93.setVisible(false);lyr_Espaceboisclass_94.setVisible(false);lyr_Codessecteurs_95.setVisible(false);lyr_Secteurs_96.setVisible(false);lyr_Bois_97.setVisible(false);lyr_Codessecteurs_98.setVisible(false);lyr_Secteurs_99.setVisible(false);lyr_Droitdepremption_100.setVisible(false);lyr_Codessecteurs_101.setVisible(false);lyr_Secteurs_102.setVisible(false);lyr_DroitdePremption_103.setVisible(false);lyr_Codessecteurs_104.setVisible(false);lyr_Secteurs_105.setVisible(false);lyr_DroitdePremptionurbain_106.setVisible(false);lyr_Prescriptionssurfaciques_107.setVisible(false);lyr_Prescriptionsponctuelles_108.setVisible(false);lyr_Codessecteurs_109.setVisible(false);lyr_Secteurs_110.setVisible(false);lyr_Codessecteurs_111.setVisible(false);lyr_Secteurs_112.setVisible(false);lyr_Secteurs_113.setVisible(false);lyr_Prescriptionssurfaciques_114.setVisible(false);lyr_Prescriptionslinaires_115.setVisible(false);lyr_Prescriptionsponctuelles_116.setVisible(false);lyr_Codessecteurs_117.setVisible(false);lyr_Prescriptionssurfaciques_118.setVisible(false);lyr_Secteurs_119.setVisible(false);lyr_Codessecteurs_120.setVisible(false);lyr_Secteurs_121.setVisible(false);lyr_Codessecteurs_122.setVisible(false);lyr_Secteurs_123.setVisible(false);lyr_Prescriptionssurfaciques_124.setVisible(false);lyr_Prescriptionslinaires_125.setVisible(false);lyr_Prescriptionsponctuelles_126.setVisible(false);lyr_Codessecteurs_127.setVisible(false);lyr_Corpsdeferme_128.setVisible(false);lyr_Distancedereculautourdubti_129.setVisible(false);lyr_Btiagricole_130.setVisible(false);lyr_Primtredeprotectionincendie100m_131.setVisible(false);lyr_Primtredeprotectionincendie15m_132.setVisible(false);lyr_lotsanonymesPAC_133.setVisible(false);lyr_Corpsdeferme_134.setVisible(false);lyr_Distancedereculautourdubti_135.setVisible(false);lyr_Btiagricole_136.setVisible(false);lyr_Zonedactivitetdeservice_137.setVisible(false);lyr_ERP_138.setVisible(false);lyr_PPE_139.setVisible(false);lyr_PPI_140.setVisible(false);lyr_PPR_141.setVisible(false);lyr_Fortspubliques_142.setVisible(false);lyr_Haies_143.setVisible(false);lyr_Trononshydrographiques_144.setVisible(false);lyr_Surfaceshydrographiques_145.setVisible(false);lyr_Dtailshydrographiques_146.setVisible(false);lyr_MaresPRAM_147.setVisible(false);lyr_Bassinversanttopographique_148.setVisible(false);lyr_Toponymiehydrographie_149.setVisible(false);lyr_ZPPAGournayenBrayZone2_150.setVisible(false);lyr_ZPPAGournayenBrayZone1_151.setVisible(false);lyr_Sitesauxabords_152.setVisible(false);lyr_SUPMH_153.setVisible(false);lyr_SPR_154.setVisible(false);lyr_Sitesclasss_155.setVisible(false);lyr_Sitesinscrits_156.setVisible(false);lyr_Immeubles_157.setVisible(false);lyr_ZPPAindiffrencies_158.setVisible(false);lyr_ZPPAindiffrenciescentrodes_159.setVisible(false);lyr_RoutesconcdesTypeC_160.setVisible(false);lyr_RoutesconcdesTypeA_161.setVisible(false);lyr_RoutesTypeC_162.setVisible(false);lyr_RoutesTypeA_163.setVisible(false);lyr_Canalisationshydrocarbures_164.setVisible(false);lyr_CanalisationsgazGRT_165.setVisible(false);lyr_CanalisationsgazGRDF_166.setVisible(false);lyr_LignesbassetensionsouterrainesENEDIS_167.setVisible(false);lyr_LignesbassetensionariennesENEDIS_168.setVisible(false);lyr_LigneshautetensionsouterrainesENEDIS_169.setVisible(false);lyr_LigneshautetensionariennesENEDIS_170.setVisible(false);lyr_LigneshautetensionRTE_171.setVisible(false);lyr_Postesdetransformation_172.setVisible(false);lyr_Itinraireautre_173.setVisible(false);lyr_Voieferre_174.setVisible(false);lyr_RoutesdeGrandeCirculation_175.setVisible(false);lyr_Routesnumrotesounommes_176.setVisible(false);lyr_Niveaudurisque_177.setVisible(false);lyr_Zonesdalas_178.setVisible(false);lyr_Zonesrglementaires_179.setVisible(false);lyr_Ruissellement_180.setVisible(false);lyr_Secteurs_181.setVisible(false);lyr_ICPE_182.setVisible(false);lyr_SitesBASOL_183.setVisible(false);lyr_Sitespollus_184.setVisible(false);lyr_Zonesimpermables_185.setVisible(false);lyr_Remontesdenappes_186.setVisible(false);lyr_ZNIEFFtype2_187.setVisible(false);lyr_ZNIEFFtype1_188.setVisible(false);lyr_Zoneshumides_189.setVisible(false);lyr_Natura2000_190.setVisible(false);lyr_Cimetire_191.setVisible(true);lyr_Rservoir_192.setVisible(true);lyr_Terraindesport_193.setVisible(true);lyr_Monument_194.setVisible(true);lyr_Indiffrenci_195.setVisible(true);lyr_Industrielagricoleoucommercial_196.setVisible(true);lyr_Constructionsponctuelles_197.setVisible(true);lyr_Pylne_198.setVisible(false);lyr_CCdes4Rivires_199.setVisible(false);lyr_CCBrayEawy_200.setVisible(false);lyr_CCdeLondinieres_201.setVisible(false);lyr_Parcellescadastrales_202.setVisible(true);lyr_Communesassociesoudlgues_203.setVisible(false);lyr_CommunesadhrentesADS_204.setVisible(false);lyr_Communes_205.setVisible(true);lyr_Nomdescommunes_206.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_DocumentsdUrbanisme,group_EnquteagricoleLesGrandesVentes,group_EnquteagricoleLaFeuillie,group_Servicesetactivits2024,group_Captagesdeau,group_Elmentsnaturels,group_Patrimoine,group_Gaz,group_Electricit,group_Voiesdecommunication,group_Retraitgonflementdesargiles,group_PPRiCaillyAubetteRobec,group_AZIVarenne,group_Risquesindustriels,group_Risqueshydrologiques,group_Zonagesenvironnementaux,group_Bti,group_Limitesadministratives];
lyr_PETRduPaysdeBray_1.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Secteurs_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'URLFIC': 'URLFIC', 'DATVALID': 'DATVALID', 'TYPEZONE': 'TYPEZONE', 'IDURBA': 'IDURBA', 'NOMFIC': 'NOMFIC', });
lyr_Prescriptionssurfaciques_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_5.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_6.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_7.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'URLFIC': 'URLFIC', 'DATVALID': 'DATVALID', 'TYPEZONE': 'TYPEZONE', 'IDURBA': 'IDURBA', 'NOMFIC': 'NOMFIC', });
lyr_Secteurs_8.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_9.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_10.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_11.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Primtresdeprotectiondecaptage_12.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_13.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Ruissellement_14.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_15.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_16.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_17.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_18.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_19.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_20.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_21.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'URLFIC': 'URLFIC', 'DATVALID': 'DATVALID', 'TYPEZONE': 'TYPEZONE', 'IDURBA': 'IDURBA', 'NOMFIC': 'NOMFIC', });
lyr_Prescriptionssurfaciques_22.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_23.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_24.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_25.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'URLFIC': 'URLFIC', 'DATVALID': 'DATVALID', 'TYPEZONE': 'TYPEZONE', 'IDURBA': 'IDURBA', 'NOMFIC': 'NOMFIC', });
lyr_Secteurs_26.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Boisprotgs_27.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_28.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_29.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_30.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'TYPE': 'TYPE', });
lyr_Codessecteurs_31.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_32.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_33.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_34.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_35.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_36.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_37.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_38.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_39.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_40.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_41.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_42.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_43.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_44.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_45.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_46.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_47.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_48.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_49.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques2_50.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionssurfaciques1_51.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaire_52.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_53.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_54.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_55.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_56.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_57.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_58.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_59.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_60.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_61.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_62.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_63.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'url_rglmt': 'url_rglmt', 'shape_peri': 'shape_peri', });
lyr_Prescriptionssurfaciques_64.set('fieldAliases', {'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'txt': 'txt', 'typepsc': 'typepsc', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'URL_RGLMT': 'URL_RGLMT', 'largeur': 'largeur', 'num_p_com': 'num_p_com', 'benef': 'benef', 'Vocation': 'Vocation', });
lyr_Prescriptionslinaires_65.set('fieldAliases', {});
lyr_Prescriptionsponctuelles_66.set('fieldAliases', {'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'txt': 'txt', 'typepsc': 'typepsc', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'URL_RGLMT': 'URL_RGLMT', });
lyr_Codessecteurs_67.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'url_rglmt': 'url_rglmt', 'shape_peri': 'shape_peri', });
lyr_Secteurs_68.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_69.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_70.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_71.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_72.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_73.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_74.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_75.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_76.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_77.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques2_78.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'IDURBA': 'IDURBA', });
lyr_Prescriptionssurfaciques1_79.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Ruissellement_80.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'URLFICH': 'URLFICH', 'IDURBA': 'IDURBA', });
lyr_Prescriptionslinaires_81.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_82.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_83.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_84.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_85.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_86.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_87.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_88.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_89.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_90.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_91.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_92.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_93.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Espaceboisclass_94.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_95.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_96.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Bois_97.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_98.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_99.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Droitdepremption_100.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_101.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_102.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_DroitdePremption_103.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_104.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_105.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_DroitdePremptionurbain_106.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionssurfaciques_107.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_108.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_109.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_110.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_111.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_112.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_113.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_114.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionslinaires_115.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionsponctuelles_116.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_117.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_118.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_119.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_120.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_121.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_122.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_123.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_124.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionslinaires_125.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionsponctuelles_126.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_127.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Corpsdeferme_128.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'REALISATIO': 'REALISATIO', 'DATE': 'DATE', 'NUM_EXPLOI': 'NUM_EXPLOI', 'num_expl_1': 'num_expl_1', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'TYPE_DOS_2': 'TYPE_DOS_2', 'PRECISION': 'PRECISION', 'AD_SMT': 'AD_SMT', 'AD_BAF': 'AD_BAF', 'TYPO_CDF': 'TYPO_CDF', 'STATUT': 'STATUT', 'X': 'X', 'Y': 'Y', });
lyr_Distancedereculautourdubti_129.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Btiagricole_130.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Primtredeprotectionincendie100m_131.set('fieldAliases', {'ID': 'ID', });
lyr_Primtredeprotectionincendie15m_132.set('fieldAliases', {'ID': 'ID', });
lyr_lotsanonymesPAC_133.set('fieldAliases', {'NUM_ILOTS': 'NUM_ILOTS', 'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'COMMUNE': 'COMMUNE', 'CODE_INSEE': 'CODE_INSEE', 'S_CADASTRA': 'S_CADASTRA', 'S_CALC_MAP': 'S_CALC_MAP', });
lyr_Corpsdeferme_134.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'REALISATIO': 'REALISATIO', 'DATE': 'DATE', 'NUM_EXPLOI': 'NUM_EXPLOI', 'num_expl_1': 'num_expl_1', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'TYPE_DOS_2': 'TYPE_DOS_2', 'PRECISION': 'PRECISION', 'AD_SMT': 'AD_SMT', 'AD_BAF': 'AD_BAF', 'TYPO_CDF': 'TYPO_CDF', 'STATUT': 'STATUT', 'X': 'X', 'Y': 'Y', });
lyr_Distancedereculautourdubti_135.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Btiagricole_136.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Zonedactivitetdeservice_137.set('fieldAliases', {'ID': 'ID', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', 'NOMCOMMERC': 'NOMCOMMERC', });
lyr_ERP_138.set('fieldAliases', {'ID': 'ID', 'ID_REF': 'ID_REF', 'CATEGORIE': 'CATEGORIE', 'TYPE_1': 'TYPE_1', 'TYPE_2': 'TYPE_2', 'ACTIV_1': 'ACTIV_1', 'ACTIV_2': 'ACTIV_2', 'LIBELLE': 'LIBELLE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'PUBLIC': 'PUBLIC', 'OUVERT': 'OUVERT', 'CAP_ACC': 'CAP_ACC', 'CAP_HEBERG': 'CAP_HEBERG', 'ORIGIN_GEO': 'ORIGIN_GEO', 'TYPE_LOC': 'TYPE_LOC', 'VALID_IGN': 'VALID_IGN', 'CODE_INSEE': 'CODE_INSEE', 'SIRET': 'SIRET', 'ADR_NUMERO': 'ADR_NUMERO', 'ADR_REP': 'ADR_REP', 'ADR_COMPL': 'ADR_COMPL', 'ADR_NOM_1': 'ADR_NOM_1', 'ADR_NOM_2': 'ADR_NOM_2', 'CODE_POST': 'CODE_POST', 'ID_BATI': 'ID_BATI', 'ID_ENCEINT': 'ID_ENCEINT', });
lyr_PPE_139.set('fieldAliases', {'code_pp': 'code_pp', 'source': 'source', 'precision': 'precision', 'qualite': 'qualite', 'siren_ars': 'siren_ars', 'diffusion': 'diffusion', '_edit_date': '_edit_date', 'projet': 'projet', 'psv_code': 'psv_code', 'code_ins': 'code_ins', 'ins_cap_re': 'ins_cap_re', 'ins_pro_et': 'ins_pro_et', 'ins_pro__1': 'ins_pro__1', });
lyr_PPI_140.set('fieldAliases', {'code_pp': 'code_pp', 'source': 'source', 'precision': 'precision', 'qualite': 'qualite', 'siren_ars': 'siren_ars', 'diffusion': 'diffusion', '_edit_date': '_edit_date', 'projet': 'projet', 'psv_code': 'psv_code', 'code_ins': 'code_ins', 'ins_cap_re': 'ins_cap_re', 'ins_pro_et': 'ins_pro_et', 'ins_pro__1': 'ins_pro__1', });
lyr_PPR_141.set('fieldAliases', {'code_pp': 'code_pp', 'source': 'source', 'precision': 'precision', 'qualite': 'qualite', 'siren_ars': 'siren_ars', 'diffusion': 'diffusion', '_edit_date': '_edit_date', 'projet': 'projet', 'psv_code': 'psv_code', 'code_ins': 'code_ins', 'ins_cap_re': 'ins_cap_re', 'ins_pro_et': 'ins_pro_et', 'ins_pro__1': 'ins_pro__1', });
lyr_Fortspubliques_142.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', });
lyr_Haies_143.set('fieldAliases', {'ID': 'ID', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'HAUTEUR': 'HAUTEUR', 'LARGEUR': 'LARGEUR', 'SOURCES': 'SOURCES', 'ID_SOURCES': 'ID_SOURCES', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', });
lyr_Trononshydrographiques_144.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'POS_SOL': 'POS_SOL', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'IPE': 'IPE', 'ID_IPE': 'ID_IPE', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Surfaceshydrographiques_145.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Dtailshydrographiques_146.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'PERSISTANC': 'PERSISTANC', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', });
lyr_MaresPRAM_147.set('fieldAliases', {'_uid_': '_uid_', 'l_id': 'l_id', 'l_idstrp': 'l_idstrp', 'date_local': 'date_local', 'statut_mar': 'statut_mar', 'type_m': 'type_m', });
lyr_Bassinversanttopographique_148.set('fieldAliases', {'ID_C_EAU': 'ID_C_EAU', 'CODE_CARTH': 'CODE_CARTH', 'CODE_BH': 'CODE_BH', 'COMMENT': 'COMMENT', 'ORIGINE': 'ORIGINE', 'B_FLUVIAL': 'B_FLUVIAL', 'STATUT': 'STATUT', 'SRC_COORD': 'SRC_COORD', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_PLANI': 'ACQU_PLANI', 'ID_SOURCE': 'ID_SOURCE', 'SOURCE': 'SOURCE', 'DATE_CONF': 'DATE_CONF', 'DATE_APP': 'DATE_APP', 'DATE_MAJ': 'DATE_MAJ', 'DATE_CREAT': 'DATE_CREAT', 'BASS_HYDRO': 'BASS_HYDRO', 'TOPONYME': 'TOPONYME', 'CODE_HYDRO': 'CODE_HYDRO', 'ID': 'ID', });
lyr_Toponymiehydrographie_149.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'GRAPHIE', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_ZPPAGournayenBrayZone2_150.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_ZPPAGournayenBrayZone1_151.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', 'layer': 'layer', 'path': 'path', });
lyr_Sitesauxabords_152.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_SUPMH_153.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_SPR_154.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_Sitesclasss_155.set('fieldAliases', {'idsite': 'idsite', 'idintgest': 'idintgest', 'dep': 'dep', 'nomsite': 'nomsite', 'type': 'type', 'descriptio': 'descriptio', 'nature': 'nature', 'datedecis': 'datedecis', 'datedecisr': 'datedecisr', 'surfoffic': 'surfoffic', 'echnum': 'echnum', 'precision': 'precision', 'srcgeogen': 'srcgeogen', 'datesrcgen': 'datesrcgen', 'surfcalc': 'surfcalc', 'surfmer': 'surfmer', 'urlfiche': 'urlfiche', 'urltxtrgl': 'urltxtrgl', 'urlcarte': 'urlcarte', 'urlcartec': 'urlcartec', 'urlweb': 'urlweb', 'urlcarmen': 'urlcarmen', });
lyr_Sitesinscrits_156.set('fieldAliases', {'idsite': 'idsite', 'idintgest': 'idintgest', 'dep': 'dep', 'nomsite': 'nomsite', 'type': 'type', 'descriptio': 'descriptio', 'nature': 'nature', 'datedecis': 'datedecis', 'datedecisr': 'datedecisr', 'surfoffic': 'surfoffic', 'echnum': 'echnum', 'precision': 'precision', 'srcgeogen': 'srcgeogen', 'datesrcgen': 'datesrcgen', 'surfcalc': 'surfcalc', 'surfmer': 'surfmer', 'urlfiche': 'urlfiche', 'urltxtrgl': 'urltxtrgl', 'urlcarte': 'urlcarte', 'urlcartec': 'urlcartec', 'urlweb': 'urlweb', 'urlcarmen': 'urlcarmen', });
lyr_Immeubles_157.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_ZPPAindiffrencies_158.set('fieldAliases', {'EA_NATCODE': 'EA_NATCODE', 'COMMUNE_PP': 'COMMUNE_PP', 'NUMORDRE': 'NUMORDRE', 'NUMERO': 'NUMERO', 'NUMERO_DRA': 'NUMERO_DRA', 'NOMUSUEL': 'NOMUSUEL', 'LIEU_IGN': 'LIEU_IGN', 'LIEU_CADAS': 'LIEU_CADAS', 'VESTIGES': 'VESTIGES', 'NATURE_VES': 'NATURE_VES', 'CHRONO_DEB': 'CHRONO_DEB', 'CHRONO_FIN': 'CHRONO_FIN', 'CHRONO_FOU': 'CHRONO_FOU', 'CHRONO_DOU': 'CHRONO_DOU', 'CHRONO_PER': 'CHRONO_PER', 'COMMENT_CH': 'COMMENT_CH', 'NUMERIQUE_': 'NUMERIQUE_', 'NUMERIQU_1': 'NUMERIQU_1', 'CHRONO_D_1': 'CHRONO_D_1', 'X_SAISI': 'X_SAISI', 'Y_SAISI': 'Y_SAISI', 'SURFACE': 'SURFACE', 'PARCELLES': 'PARCELLES', 'INVENTEUR': 'INVENTEUR', 'ANNEE_DECO': 'ANNEE_DECO', 'X_DEGRE': 'X_DEGRE', 'Y_DEGRE': 'Y_DEGRE', 'EMPRISE': 'EMPRISE', 'GEOREFEREN': 'GEOREFEREN', 'GEOMETRIE': 'GEOMETRIE', });
lyr_ZPPAindiffrenciescentrodes_159.set('fieldAliases', {'EA_NATCODE': 'EA_NATCODE', 'COMMUNE_PP': 'COMMUNE_PP', 'NUMORDRE': 'NUMORDRE', 'NUMERO': 'NUMERO', 'NUMERO_DRA': 'NUMERO_DRA', 'NOMUSUEL': 'NOMUSUEL', 'LIEU_IGN': 'LIEU_IGN', 'LIEU_CADAS': 'LIEU_CADAS', 'VESTIGES': 'VESTIGES', 'NATURE_VES': 'NATURE_VES', 'CHRONO_DEB': 'CHRONO_DEB', 'CHRONO_FIN': 'CHRONO_FIN', 'CHRONO_FOU': 'CHRONO_FOU', 'CHRONO_DOU': 'CHRONO_DOU', 'CHRONO_PER': 'CHRONO_PER', 'COMMENT_CH': 'COMMENT_CH', 'NUMERIQUE_': 'NUMERIQUE_', 'NUMERIQU_1': 'NUMERIQU_1', 'CHRONO_D_1': 'CHRONO_D_1', 'X_SAISI': 'X_SAISI', 'Y_SAISI': 'Y_SAISI', 'SURFACE': 'SURFACE', 'PARCELLES': 'PARCELLES', 'INVENTEUR': 'INVENTEUR', 'ANNEE_DECO': 'ANNEE_DECO', 'X_DEGRE': 'X_DEGRE', 'Y_DEGRE': 'Y_DEGRE', 'EMPRISE': 'EMPRISE', 'GEOREFEREN': 'GEOREFEREN', 'GEOMETRIE': 'GEOMETRIE', });
lyr_RoutesconcdesTypeC_160.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'VALIDEFIN': 'VALIDEFIN', 'LEG_SANEF': 'LEG_SANEF', });
lyr_RoutesconcdesTypeA_161.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'VALIDEDEB': 'VALIDEDEB', 'VALIDEFIN': 'VALIDEFIN', 'LEGENDPROD': 'LEGENDPROD', });
lyr_RoutesTypeC_162.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'UUEID': 'UUEID', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'INDICETYPE': 'INDICETYPE', 'VALIDEDEB': 'VALIDEDEB', 'VALIDEFIN': 'VALIDEFIN', });
lyr_RoutesTypeA_163.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'UUEID': 'UUEID', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'INDICETYPE': 'INDICETYPE', 'VALIDEDEB': 'VALIDEDEB', 'VALIDEFIN': 'VALIDEFIN', });
lyr_Canalisationshydrocarbures_164.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_CanalisationsgazGRT_165.set('fieldAliases', {'object_id': 'object_id', 'nom_region': 'nom_region', 'departemen': 'departemen', });
lyr_CanalisationsgazGRDF_166.set('fieldAliases', {'etat_serv': 'etat_serv', 'insee_comm': 'insee_comm', 'commune_ad': 'commune_ad', 'code_depar': 'code_depar', 'departemen': 'departemen', 'region_adm': 'region_adm', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_LignesbassetensionsouterrainesENEDIS_167.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LignesbassetensionariennesENEDIS_168.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LigneshautetensionsouterrainesENEDIS_169.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LigneshautetensionariennesENEDIS_170.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LigneshautetensionRTE_171.set('fieldAliases', {'ID': 'ID', 'VOLTAGE': 'VOLTAGE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Postesdetransformation_172.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Itinraireautre_173.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', });
lyr_Voieferre_174.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'ELECTRIFIE': 'ELECTRIFIE', 'LARGEUR': 'LARGEUR', 'NB_VOIES': 'NB_VOIES', 'USAGE': 'USAGE', 'VITES_MAX': 'VITES_MAX', 'ID_VFN': 'ID_VFN', 'TOPONYME': 'TOPONYME', });
lyr_RoutesdeGrandeCirculation_175.set('fieldAliases', {'objectid': 'objectid', 'axe': 'axe', 'cumuld': 'cumuld', 'cumulf': 'cumulf', 'plod': 'plod', 'absd': 'absd', 'plof': 'plof', 'absf': 'absf', 'xd': 'xd', 'yd': 'yd', 'zd': 'zd', 'xf': 'xf', 'yf': 'yf', 'zf': 'zf', 'cote': 'cote', 'emplacemen': 'emplacemen', 'voie': 'voie', 'distance': 'distance', 'accrochage': 'accrochage', 'objetid': 'objetid', 'longueur': 'longueur', 'releve_xy': 'releve_xy', 'parent_id': 'parent_id', 'validation': 'validation', 'status': 'status', 'link_id': 'link_id', 'import': 'import', 'user_creat': 'user_creat', 'date_creat': 'date_creat', 'user_modif': 'user_modif', 'date_modif': 'date_modif', 'territoire': 'territoire', 'daterefere': 'daterefere', 'chaussee': 'chaussee', 'id_prj': 'id_prj', 'date_grde_': 'date_grde_', 'grande_cir': 'grande_cir', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Routesnumrotesounommes_176.set('fieldAliases', {'ID': 'ID', 'TYPE_ROUTE': 'TYPE_ROUTE', 'NUMERO': 'NUMERO', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'GESTION': 'GESTION', });
lyr_Niveaudurisque_177.set('fieldAliases', {'dpt': 'dpt', 'niveau': 'niveau', 'alea': 'alea', });
lyr_Zonesdalas_178.set('fieldAliases', {'ID_ZONE': 'ID_ZONE', 'ID_GASPAR': 'ID_GASPAR', 'DESCRIPT': 'DESCRIPT', 'CODERISQUE': 'CODERISQUE', 'NOMRISQUE': 'NOMRISQUE', 'NIVALEA': 'NIVALEA', 'NIVALEA_ST': 'NIVALEA_ST', 'TITRECARTE': 'TITRECARTE', 'DATECARTE': 'DATECARTE', 'ID_MAP': 'ID_MAP', });
lyr_Zonesrglementaires_179.set('fieldAliases', {'id': 'id', 'id_map': 'id_map', 'id_zone': 'id_zone', 'id_gaspar': 'id_gaspar', 'nom': 'nom', 'codezone': 'codezone', 'soumisalea': 'soumisalea', 'typereg': 'typereg', });
lyr_Ruissellement_180.set('fieldAliases', {'id': 'id', 'id_map': 'id_map', 'id_zone': 'id_zone', 'id_gaspar': 'id_gaspar', 'nom': 'nom', 'codezone': 'codezone', 'soumisalea': 'soumisalea', 'typereg': 'typereg', });
lyr_Secteurs_181.set('fieldAliases', {'ALEA': 'ALEA', });
lyr_ICPE_182.set('fieldAliases', {'code_aiot': 'code_aiot', 'x': 'x', 'y': 'y', 'code_epsg': 'code_epsg', 'nom_ets': 'nom_ets', 'num_dep': 'num_dep', 'adresse': 'adresse', 'cd_insee': 'cd_insee', 'cd_postal': 'cd_postal', 'commune': 'commune', 'code_naf': 'code_naf', 'lib_naf': 'lib_naf', 'num_siret': 'num_siret', 'cd_regime': 'cd_regime', 'lib_regime': 'lib_regime', 'seveso': 'seveso', 'lib_seveso': 'lib_seveso', 'bovins': 'bovins', 'porcs': 'porcs', 'volailles': 'volailles', 'carriere': 'carriere', 'eolienne': 'eolienne', 'industrie': 'industrie', 'ied': 'ied', 'priorite_n': 'priorite_n', 'url_fiche': 'url_fiche', });
lyr_SitesBASOL_183.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_etab': 'nom_etab', 'nom_instr': 'nom_instr', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_Sitespollus_184.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_ets': 'nom_ets', 'nom_site': 'nom_site', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_Zonesimpermables_185.set('fieldAliases', {'Id': 'Id', });
lyr_Remontesdenappes_186.set('fieldAliases', {'CLASSE': 'CLASSE', 'FIAB_MNT': 'FIAB_MNT', 'FIAB_ESO': 'FIAB_ESO', 'FIAB_TOT': 'FIAB_TOT', 'CLASSEFIAB': 'CLASSEFIAB', 'gridcode': 'gridcode', });
lyr_ZNIEFFtype2_187.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_ZNIEFFtype1_188.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_Zoneshumides_189.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_Natura2000_190.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', });
lyr_Cimetire_191.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Rservoir_192.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'HAUTEUR': 'HAUTEUR', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'VOLUME': 'VOLUME', });
lyr_Terraindesport_193.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Monument_194.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Indiffrenci_195.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Industrielagricoleoucommercial_196.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Constructionsponctuelles_197.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_Pylne_198.set('fieldAliases', {'ID': 'ID', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_CCdes4Rivires_199.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CCBrayEawy_200.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CCdeLondinieres_201.set('fieldAliases', {'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Parcellescadastrales_202.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', 'layer': 'layer', 'path': 'path', });
lyr_Communesassociesoudlgues_203.set('fieldAliases', {'ID': 'ID', 'INSEE_CAD': 'INSEE_CAD', 'INSEE_COM': 'INSEE_COM', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'POPULATION': 'POPULATION', 'CODE_SIREN': 'CODE_SIREN', });
lyr_CommunesadhrentesADS_204.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Communes_205.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Nomdescommunes_206.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_PETRduPaysdeBray_1.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Secteurs_2.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_3.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'URLFIC': 'TextEdit', 'DATVALID': 'TextEdit', 'TYPEZONE': 'TextEdit', 'IDURBA': 'TextEdit', 'NOMFIC': 'TextEdit', });
lyr_Prescriptionssurfaciques_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_5.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_6.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_7.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'URLFIC': 'TextEdit', 'DATVALID': 'TextEdit', 'TYPEZONE': 'TextEdit', 'IDURBA': 'TextEdit', 'NOMFIC': 'TextEdit', });
lyr_Secteurs_8.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_9.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_10.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_11.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Primtresdeprotectiondecaptage_12.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'STYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_13.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Ruissellement_14.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'STYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_15.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_16.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_17.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_18.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_19.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_20.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_21.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'URLFIC': 'TextEdit', 'DATVALID': 'TextEdit', 'TYPEZONE': 'TextEdit', 'IDURBA': 'TextEdit', 'NOMFIC': 'TextEdit', });
lyr_Prescriptionssurfaciques_22.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_23.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_24.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_25.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'URLFIC': 'TextEdit', 'DATVALID': 'TextEdit', 'TYPEZONE': 'TextEdit', 'IDURBA': 'TextEdit', 'NOMFIC': 'TextEdit', });
lyr_Secteurs_26.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Boisprotgs_27.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_28.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_29.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_30.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_Codessecteurs_31.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_32.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_33.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_34.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_35.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_36.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_37.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_38.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_39.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_40.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_41.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_42.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_43.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_44.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_45.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_46.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_47.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_48.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_49.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques2_50.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionssurfaciques1_51.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaire_52.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_53.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_54.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_55.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_56.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_57.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_58.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_59.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_60.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_61.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_62.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_63.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'url_rglmt': 'TextEdit', 'shape_peri': 'TextEdit', });
lyr_Prescriptionssurfaciques_64.set('fieldImages', {'objectid': 'Range', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'txt': 'TextEdit', 'typepsc': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'URL_RGLMT': 'TextEdit', 'largeur': 'Range', 'num_p_com': 'Range', 'benef': 'TextEdit', 'Vocation': 'TextEdit', });
lyr_Prescriptionslinaires_65.set('fieldImages', {});
lyr_Prescriptionsponctuelles_66.set('fieldImages', {'objectid': 'Range', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'txt': 'TextEdit', 'typepsc': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'URL_RGLMT': 'TextEdit', });
lyr_Codessecteurs_67.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'url_rglmt': 'TextEdit', 'shape_peri': 'TextEdit', });
lyr_Secteurs_68.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_69.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_70.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_71.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_72.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_73.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_74.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_75.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_76.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_77.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques2_78.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'STYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'IDURBA': 'TextEdit', });
lyr_Prescriptionssurfaciques1_79.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Ruissellement_80.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'STYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFICH': 'TextEdit', 'IDURBA': 'TextEdit', });
lyr_Prescriptionslinaires_81.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_82.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_83.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_84.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_85.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_86.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionssurfaciques_87.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionslinaires_88.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionsponctuelles_89.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Codessecteurs_90.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_91.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_92.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_93.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Espaceboisclass_94.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_95.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_96.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Bois_97.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_98.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_99.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Droitdepremption_100.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_101.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_102.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_DroitdePremption_103.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_104.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_105.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_DroitdePremptionurbain_106.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionssurfaciques_107.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_108.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_109.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_110.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_111.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_112.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_113.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_114.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionslinaires_115.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionsponctuelles_116.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_117.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_118.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_119.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_120.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_121.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_122.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_123.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_124.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionslinaires_125.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionsponctuelles_126.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_127.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Corpsdeferme_128.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'REALISATIO': '', 'DATE': 'DateTime', 'NUM_EXPLOI': '', 'num_expl_1': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'TYPE_DOS_2': '', 'PRECISION': 'TextEdit', 'AD_SMT': 'TextEdit', 'AD_BAF': 'TextEdit', 'TYPO_CDF': 'TextEdit', 'STATUT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Distancedereculautourdubti_129.set('fieldImages', {'NOM_EXPLOI': 'TextEdit', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': 'TextEdit', 'SOUS_TYPE_': 'TextEdit', 'LIBELLE_TY': 'TextEdit', 'TYPE_DOSSI': 'TextEdit', 'TYPE_DOS_1': 'TextEdit', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': 'TextEdit', });
lyr_Btiagricole_130.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': '', 'SOUS_TYPE_': '', 'LIBELLE_TY': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': '', });
lyr_Primtredeprotectionincendie100m_131.set('fieldImages', {'ID': 'Range', });
lyr_Primtredeprotectionincendie15m_132.set('fieldImages', {'ID': 'Range', });
lyr_lotsanonymesPAC_133.set('fieldImages', {'NUM_ILOTS': 'TextEdit', 'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'COMMUNE': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'S_CADASTRA': '', 'S_CALC_MAP': '', });
lyr_Corpsdeferme_134.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'REALISATIO': '', 'DATE': 'DateTime', 'NUM_EXPLOI': '', 'num_expl_1': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'TYPE_DOS_2': '', 'PRECISION': 'TextEdit', 'AD_SMT': 'TextEdit', 'AD_BAF': 'TextEdit', 'TYPO_CDF': 'TextEdit', 'STATUT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Distancedereculautourdubti_135.set('fieldImages', {'NOM_EXPLOI': 'TextEdit', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': 'TextEdit', 'SOUS_TYPE_': 'TextEdit', 'LIBELLE_TY': 'TextEdit', 'TYPE_DOSSI': 'TextEdit', 'TYPE_DOS_1': 'TextEdit', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': 'TextEdit', });
lyr_Btiagricole_136.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': '', 'SOUS_TYPE_': '', 'LIBELLE_TY': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': '', });
lyr_Zonedactivitetdeservice_137.set('fieldImages', {'ID': 'TextEdit', 'CATEGORIE': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ID_BAN': 'TextEdit', 'NOMCOMMERC': 'TextEdit', });
lyr_ERP_138.set('fieldImages', {'ID': 'TextEdit', 'ID_REF': 'TextEdit', 'CATEGORIE': 'TextEdit', 'TYPE_1': 'TextEdit', 'TYPE_2': 'TextEdit', 'ACTIV_1': 'TextEdit', 'ACTIV_2': 'TextEdit', 'LIBELLE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PUBLIC': 'TextEdit', 'OUVERT': 'TextEdit', 'CAP_ACC': 'Range', 'CAP_HEBERG': 'Range', 'ORIGIN_GEO': 'TextEdit', 'TYPE_LOC': 'TextEdit', 'VALID_IGN': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'SIRET': 'TextEdit', 'ADR_NUMERO': 'TextEdit', 'ADR_REP': 'TextEdit', 'ADR_COMPL': 'TextEdit', 'ADR_NOM_1': 'TextEdit', 'ADR_NOM_2': 'TextEdit', 'CODE_POST': 'TextEdit', 'ID_BATI': 'TextEdit', 'ID_ENCEINT': 'TextEdit', });
lyr_PPE_139.set('fieldImages', {'code_pp': 'TextEdit', 'source': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'siren_ars': 'TextEdit', 'diffusion': 'TextEdit', '_edit_date': 'DateTime', 'projet': 'TextEdit', 'psv_code': 'TextEdit', 'code_ins': 'TextEdit', 'ins_cap_re': 'TextEdit', 'ins_pro_et': 'TextEdit', 'ins_pro__1': 'TextEdit', });
lyr_PPI_140.set('fieldImages', {'code_pp': 'TextEdit', 'source': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'siren_ars': 'TextEdit', 'diffusion': 'TextEdit', '_edit_date': 'DateTime', 'projet': 'TextEdit', 'psv_code': 'TextEdit', 'code_ins': 'TextEdit', 'ins_cap_re': 'TextEdit', 'ins_pro_et': 'TextEdit', 'ins_pro__1': 'TextEdit', });
lyr_PPR_141.set('fieldImages', {'code_pp': 'TextEdit', 'source': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'siren_ars': 'TextEdit', 'diffusion': 'TextEdit', '_edit_date': 'DateTime', 'projet': 'TextEdit', 'psv_code': 'TextEdit', 'code_ins': 'TextEdit', 'ins_cap_re': 'TextEdit', 'ins_pro_et': 'TextEdit', 'ins_pro__1': 'TextEdit', });
lyr_Fortspubliques_142.set('fieldImages', {'ID': '', 'NATURE': '', 'TOPONYME': '', 'STATUT_TOP': '', 'IMPORTANCE': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', });
lyr_Haies_143.set('fieldImages', {'ID': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'HAUTEUR': 'Range', 'LARGEUR': 'Range', 'SOURCES': 'TextEdit', 'ID_SOURCES': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', });
lyr_Trononshydrographiques_144.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'POS_SOL': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'FOSSE': 'TextEdit', 'NAVIGABL': 'TextEdit', 'SALINITE': 'TextEdit', 'NUM_ORDRE': 'TextEdit', 'CLA_ORDRE': 'TextEdit', 'ORIGINE': 'TextEdit', 'PER_ORDRE': 'TextEdit', 'SENS_ECOUL': 'TextEdit', 'RES_COULAN': 'TextEdit', 'DELIMIT': 'TextEdit', 'LARGEUR': 'TextEdit', 'BRAS': 'TextEdit', 'COMMENT': 'TextEdit', 'CODE_CARTH': 'TextEdit', 'IPE': 'TextEdit', 'ID_IPE': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_S_HYDRO': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_Surfaceshydrographiques_145.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'SALINITE': 'TextEdit', 'ORIGINE': 'TextEdit', 'COMMENT': 'TextEdit', 'ID_P_EAU': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_P_EAU': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_Dtailshydrographiques_146.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'PERSISTANC': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ID_BAN': 'TextEdit', });
lyr_MaresPRAM_147.set('fieldImages', {'_uid_': 'TextEdit', 'l_id': 'TextEdit', 'l_idstrp': 'TextEdit', 'date_local': 'TextEdit', 'statut_mar': 'TextEdit', 'type_m': 'TextEdit', });
lyr_Bassinversanttopographique_148.set('fieldImages', {'ID_C_EAU': '', 'CODE_CARTH': '', 'CODE_BH': '', 'COMMENT': '', 'ORIGINE': '', 'B_FLUVIAL': '', 'STATUT': '', 'SRC_COORD': '', 'PREC_PLANI': '', 'ACQU_PLANI': '', 'ID_SOURCE': '', 'SOURCE': '', 'DATE_CONF': '', 'DATE_APP': '', 'DATE_MAJ': '', 'DATE_CREAT': '', 'BASS_HYDRO': '', 'TOPONYME': '', 'CODE_HYDRO': '', 'ID': '', });
lyr_Toponymiehydrographie_149.set('fieldImages', {'ID': 'TextEdit', 'CLASSE': 'TextEdit', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_TOP': 'DateTime', 'LANGUE': 'TextEdit', });
lyr_ZPPAGournayenBrayZone2_150.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ZPPAGournayenBrayZone1_151.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Sitesauxabords_152.set('fieldImages', {'idTigre': 'TextEdit', 'idApp': 'TextEdit', 'appTigre': 'TextEdit', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_SUPMH_153.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_SPR_154.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_Sitesclasss_155.set('fieldImages', {'idsite': 'TextEdit', 'idintgest': 'TextEdit', 'dep': 'TextEdit', 'nomsite': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'nature': 'TextEdit', 'datedecis': 'TextEdit', 'datedecisr': 'TextEdit', 'surfoffic': 'TextEdit', 'echnum': 'TextEdit', 'precision': 'TextEdit', 'srcgeogen': 'TextEdit', 'datesrcgen': 'TextEdit', 'surfcalc': 'TextEdit', 'surfmer': 'TextEdit', 'urlfiche': 'TextEdit', 'urltxtrgl': 'TextEdit', 'urlcarte': 'TextEdit', 'urlcartec': 'TextEdit', 'urlweb': 'TextEdit', 'urlcarmen': 'TextEdit', });
lyr_Sitesinscrits_156.set('fieldImages', {'idsite': 'TextEdit', 'idintgest': 'TextEdit', 'dep': 'TextEdit', 'nomsite': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'nature': 'TextEdit', 'datedecis': 'TextEdit', 'datedecisr': 'TextEdit', 'surfoffic': 'TextEdit', 'echnum': 'TextEdit', 'precision': 'TextEdit', 'srcgeogen': 'TextEdit', 'datesrcgen': 'TextEdit', 'surfcalc': 'TextEdit', 'surfmer': 'TextEdit', 'urlfiche': 'TextEdit', 'urltxtrgl': 'TextEdit', 'urlcarte': 'TextEdit', 'urlcartec': 'TextEdit', 'urlweb': 'TextEdit', 'urlcarmen': 'TextEdit', });
lyr_Immeubles_157.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_ZPPAindiffrencies_158.set('fieldImages', {'EA_NATCODE': 'TextEdit', 'COMMUNE_PP': 'TextEdit', 'NUMORDRE': 'Range', 'NUMERO': 'TextEdit', 'NUMERO_DRA': 'TextEdit', 'NOMUSUEL': 'TextEdit', 'LIEU_IGN': 'TextEdit', 'LIEU_CADAS': 'TextEdit', 'VESTIGES': 'TextEdit', 'NATURE_VES': 'TextEdit', 'CHRONO_DEB': 'TextEdit', 'CHRONO_FIN': 'TextEdit', 'CHRONO_FOU': 'TextEdit', 'CHRONO_DOU': 'TextEdit', 'CHRONO_PER': 'TextEdit', 'COMMENT_CH': 'TextEdit', 'NUMERIQUE_': 'TextEdit', 'NUMERIQU_1': 'TextEdit', 'CHRONO_D_1': 'TextEdit', 'X_SAISI': 'TextEdit', 'Y_SAISI': 'TextEdit', 'SURFACE': 'TextEdit', 'PARCELLES': 'TextEdit', 'INVENTEUR': 'TextEdit', 'ANNEE_DECO': 'Range', 'X_DEGRE': 'TextEdit', 'Y_DEGRE': 'TextEdit', 'EMPRISE': 'TextEdit', 'GEOREFEREN': 'TextEdit', 'GEOMETRIE': 'TextEdit', });
lyr_ZPPAindiffrenciescentrodes_159.set('fieldImages', {'EA_NATCODE': 'TextEdit', 'COMMUNE_PP': 'TextEdit', 'NUMORDRE': 'Range', 'NUMERO': 'TextEdit', 'NUMERO_DRA': 'TextEdit', 'NOMUSUEL': 'TextEdit', 'LIEU_IGN': 'TextEdit', 'LIEU_CADAS': 'TextEdit', 'VESTIGES': 'TextEdit', 'NATURE_VES': 'TextEdit', 'CHRONO_DEB': 'TextEdit', 'CHRONO_FIN': 'TextEdit', 'CHRONO_FOU': 'TextEdit', 'CHRONO_DOU': 'TextEdit', 'CHRONO_PER': 'TextEdit', 'COMMENT_CH': 'TextEdit', 'NUMERIQUE_': 'TextEdit', 'NUMERIQU_1': 'TextEdit', 'CHRONO_D_1': 'TextEdit', 'X_SAISI': 'TextEdit', 'Y_SAISI': 'TextEdit', 'SURFACE': 'TextEdit', 'PARCELLES': 'TextEdit', 'INVENTEUR': 'TextEdit', 'ANNEE_DECO': 'Range', 'X_DEGRE': 'TextEdit', 'Y_DEGRE': 'TextEdit', 'EMPRISE': 'TextEdit', 'GEOREFEREN': 'TextEdit', 'GEOMETRIE': 'TextEdit', });
lyr_RoutesconcdesTypeC_160.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'VALIDEFIN': 'DateTime', 'LEG_SANEF': 'TextEdit', });
lyr_RoutesconcdesTypeA_161.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'VALIDEDEB': 'DateTime', 'VALIDEFIN': 'DateTime', 'LEGENDPROD': 'TextEdit', });
lyr_RoutesTypeC_162.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'UUEID': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'INDICETYPE': 'TextEdit', 'VALIDEDEB': 'DateTime', 'VALIDEFIN': 'DateTime', });
lyr_RoutesTypeA_163.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'UUEID': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'INDICETYPE': 'TextEdit', 'VALIDEDEB': 'DateTime', 'VALIDEFIN': 'DateTime', });
lyr_Canalisationshydrocarbures_164.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_CanalisationsgazGRT_165.set('fieldImages', {'object_id': 'TextEdit', 'nom_region': 'TextEdit', 'departemen': 'TextEdit', });
lyr_CanalisationsgazGRDF_166.set('fieldImages', {'etat_serv': 'TextEdit', 'insee_comm': 'TextEdit', 'commune_ad': 'TextEdit', 'code_depar': 'TextEdit', 'departemen': 'TextEdit', 'region_adm': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LignesbassetensionsouterrainesENEDIS_167.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LignesbassetensionariennesENEDIS_168.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LigneshautetensionsouterrainesENEDIS_169.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LigneshautetensionariennesENEDIS_170.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LigneshautetensionRTE_171.set('fieldImages', {'ID': 'TextEdit', 'VOLTAGE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Postesdetransformation_172.set('fieldImages', {'ID': '', 'TOPONYME': '', 'STATUT_TOP': '', 'IMPORTANCE': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', });
lyr_Itinraireautre_173.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', });
lyr_Voieferre_174.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'ELECTRIFIE': 'TextEdit', 'LARGEUR': 'TextEdit', 'NB_VOIES': 'Range', 'USAGE': 'TextEdit', 'VITES_MAX': 'Range', 'ID_VFN': 'TextEdit', 'TOPONYME': 'TextEdit', });
lyr_RoutesdeGrandeCirculation_175.set('fieldImages', {'objectid': 'Range', 'axe': 'TextEdit', 'cumuld': 'Range', 'cumulf': 'Range', 'plod': 'TextEdit', 'absd': 'Range', 'plof': 'TextEdit', 'absf': 'Range', 'xd': 'TextEdit', 'yd': 'TextEdit', 'zd': 'TextEdit', 'xf': 'TextEdit', 'yf': 'TextEdit', 'zf': 'TextEdit', 'cote': 'TextEdit', 'emplacemen': 'TextEdit', 'voie': 'Range', 'distance': 'TextEdit', 'accrochage': 'Range', 'objetid': 'Range', 'longueur': 'TextEdit', 'releve_xy': 'TextEdit', 'parent_id': 'Range', 'validation': 'Range', 'status': 'Range', 'link_id': 'Range', 'import': 'Range', 'user_creat': 'TextEdit', 'date_creat': 'DateTime', 'user_modif': 'TextEdit', 'date_modif': 'DateTime', 'territoire': 'TextEdit', 'daterefere': 'DateTime', 'chaussee': 'TextEdit', 'id_prj': 'Range', 'date_grde_': 'Range', 'grande_cir': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Routesnumrotesounommes_176.set('fieldImages', {'ID': 'TextEdit', 'TYPE_ROUTE': 'TextEdit', 'NUMERO': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'GESTION': 'TextEdit', });
lyr_Niveaudurisque_177.set('fieldImages', {'dpt': '', 'niveau': '', 'alea': '', });
lyr_Zonesdalas_178.set('fieldImages', {'ID_ZONE': 'TextEdit', 'ID_GASPAR': 'TextEdit', 'DESCRIPT': 'TextEdit', 'CODERISQUE': 'TextEdit', 'NOMRISQUE': 'TextEdit', 'NIVALEA': 'TextEdit', 'NIVALEA_ST': 'TextEdit', 'TITRECARTE': 'TextEdit', 'DATECARTE': 'TextEdit', 'ID_MAP': 'TextEdit', });
lyr_Zonesrglementaires_179.set('fieldImages', {'id': 'TextEdit', 'id_map': 'TextEdit', 'id_zone': 'TextEdit', 'id_gaspar': 'TextEdit', 'nom': 'TextEdit', 'codezone': 'TextEdit', 'soumisalea': 'TextEdit', 'typereg': 'TextEdit', });
lyr_Ruissellement_180.set('fieldImages', {'id': 'TextEdit', 'id_map': 'TextEdit', 'id_zone': 'TextEdit', 'id_gaspar': 'TextEdit', 'nom': 'TextEdit', 'codezone': 'TextEdit', 'soumisalea': 'TextEdit', 'typereg': 'TextEdit', });
lyr_Secteurs_181.set('fieldImages', {'ALEA': 'Range', });
lyr_ICPE_182.set('fieldImages', {'code_aiot': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'code_epsg': 'TextEdit', 'nom_ets': 'TextEdit', 'num_dep': 'TextEdit', 'adresse': 'TextEdit', 'cd_insee': 'TextEdit', 'cd_postal': 'TextEdit', 'commune': 'TextEdit', 'code_naf': 'TextEdit', 'lib_naf': 'TextEdit', 'num_siret': 'TextEdit', 'cd_regime': 'TextEdit', 'lib_regime': 'TextEdit', 'seveso': 'TextEdit', 'lib_seveso': 'TextEdit', 'bovins': 'TextEdit', 'porcs': 'TextEdit', 'volailles': 'TextEdit', 'carriere': 'TextEdit', 'eolienne': 'TextEdit', 'industrie': 'TextEdit', 'ied': 'TextEdit', 'priorite_n': 'TextEdit', 'url_fiche': 'TextEdit', });
lyr_SitesBASOL_183.set('fieldImages', {'cd_metier': 'TextEdit', 'autre_id': 'TextEdit', 'nom_etab': 'TextEdit', 'nom_instr': 'TextEdit', 'code_siret': 'TextEdit', 'stat_instr': 'TextEdit', 'date_debut': 'DateTime', 'date_fin': 'DateTime', 'descript': 'TextEdit', 'code_insee': 'TextEdit', 'nom_com': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'code_dpt': 'TextEdit', 'nom_dpt': 'TextEdit', 'code_reg': 'TextEdit', 'nom_reg': 'TextEdit', 'act_nafv2': 'TextEdit', 'act_naf': 'TextEdit', 'act_icpe': 'TextEdit', 'act_nafv1': 'TextEdit', });
lyr_Sitespollus_184.set('fieldImages', {'cd_metier': '', 'autre_id': '', 'nom_ets': '', 'nom_site': '', 'code_siret': '', 'stat_instr': '', 'date_debut': '', 'date_fin': '', 'descript': '', 'code_insee': '', 'nom_com': '', 'x_wgs84': '', 'y_wgs84': '', 'code_dpt': '', 'nom_dpt': '', 'code_reg': '', 'nom_reg': '', 'act_nafv2': '', 'act_naf': '', 'act_icpe': '', 'act_nafv1': '', });
lyr_Zonesimpermables_185.set('fieldImages', {'Id': 'TextEdit', });
lyr_Remontesdenappes_186.set('fieldImages', {'CLASSE': 'TextEdit', 'FIAB_MNT': 'TextEdit', 'FIAB_ESO': 'TextEdit', 'FIAB_TOT': 'TextEdit', 'CLASSEFIAB': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_ZNIEFFtype2_187.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_ZNIEFFtype1_188.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Zoneshumides_189.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Natura2000_190.set('fieldImages', {'SITECODE': '', 'SITENAME': '', });
lyr_Cimetire_191.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Rservoir_192.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'VOLUME': 'TextEdit', });
lyr_Terraindesport_193.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Monument_194.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Indiffrenci_195.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Industrielagricoleoucommercial_196.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Constructionsponctuelles_197.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_Pylne_198.set('fieldImages', {'ID': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_CCdes4Rivires_199.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CCBrayEawy_200.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CCdeLondinieres_201.set('fieldImages', {'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Parcellescadastrales_202.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communesassociesoudlgues_203.set('fieldImages', {'ID': 'TextEdit', 'INSEE_CAD': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'POPULATION': 'Range', 'CODE_SIREN': 'TextEdit', });
lyr_CommunesadhrentesADS_204.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communes_205.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Nomdescommunes_206.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': '', 'path': '', });
lyr_PETRduPaysdeBray_1.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Secteurs_2.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_3.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'URLFIC': 'hidden field', 'DATVALID': 'hidden field', 'TYPEZONE': 'hidden field', 'IDURBA': 'hidden field', 'NOMFIC': 'hidden field', });
lyr_Prescriptionssurfaciques_4.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_5.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_6.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_7.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'URLFIC': 'hidden field', 'DATVALID': 'hidden field', 'TYPEZONE': 'hidden field', 'IDURBA': 'hidden field', 'NOMFIC': 'hidden field', });
lyr_Secteurs_8.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_9.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_10.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_11.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Primtresdeprotectiondecaptage_12.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'STYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_13.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Ruissellement_14.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'STYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_15.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_16.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_17.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_18.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_19.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_20.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_21.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'URLFIC': 'hidden field', 'DATVALID': 'hidden field', 'TYPEZONE': 'hidden field', 'IDURBA': 'hidden field', 'NOMFIC': 'hidden field', });
lyr_Prescriptionssurfaciques_22.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_23.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_24.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_25.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'URLFIC': 'hidden field', 'DATVALID': 'hidden field', 'TYPEZONE': 'hidden field', 'IDURBA': 'hidden field', 'NOMFIC': 'hidden field', });
lyr_Secteurs_26.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Boisprotgs_27.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_28.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_29.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_30.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'TYPE': 'hidden field', });
lyr_Codessecteurs_31.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_32.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_33.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_34.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_35.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_36.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'no label', 'DATVALID': 'hidden field', });
lyr_Secteurs_37.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_38.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_39.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_40.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_41.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_42.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_43.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_44.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_45.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_46.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_47.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_48.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_49.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'inline label - visible with data', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques2_50.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionssurfaciques1_51.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaire_52.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_53.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_54.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_55.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_56.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_57.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_58.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_59.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_60.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_61.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_62.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_63.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'inline label - visible with data', 'libelong': 'hidden field', 'typezone': 'hidden field', 'destdomi': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'url_rglmt': 'hidden field', 'shape_peri': 'hidden field', });
lyr_Prescriptionssurfaciques_64.set('fieldLabels', {'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'inline label - visible with data', 'txt': 'hidden field', 'typepsc': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', 'URL_RGLMT': 'hidden field', 'largeur': 'hidden field', 'num_p_com': 'hidden field', 'benef': 'hidden field', 'Vocation': 'hidden field', });
lyr_Prescriptionslinaires_65.set('fieldLabels', {});
lyr_Prescriptionsponctuelles_66.set('fieldLabels', {'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'inline label - visible with data', 'txt': 'hidden field', 'typepsc': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'URL_RGLMT': 'hidden field', });
lyr_Codessecteurs_67.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'hidden field', 'libelong': 'hidden field', 'typezone': 'hidden field', 'destdomi': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'url_rglmt': 'hidden field', 'shape_peri': 'hidden field', });
lyr_Secteurs_68.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_69.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_70.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_71.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_72.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_73.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_74.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_75.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_76.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_77.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques2_78.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'STYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'IDURBA': 'hidden field', });
lyr_Prescriptionssurfaciques1_79.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Ruissellement_80.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'STYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFICH': 'hidden field', 'IDURBA': 'hidden field', });
lyr_Prescriptionslinaires_81.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_82.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_83.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_84.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_85.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_86.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_87.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_88.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_89.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_90.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_91.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_92.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_93.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Espaceboisclass_94.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_95.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_96.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Bois_97.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_98.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_99.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Droitdepremption_100.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_101.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_102.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_DroitdePremption_103.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_104.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_105.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_DroitdePremptionurbain_106.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionssurfaciques_107.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_108.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_109.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_110.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_111.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_112.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_113.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_114.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionslinaires_115.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionsponctuelles_116.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_117.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_118.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_119.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_120.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_121.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_122.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_123.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_124.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionslinaires_125.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionsponctuelles_126.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_127.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Corpsdeferme_128.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'REALISATIO': 'hidden field', 'DATE': 'hidden field', 'NUM_EXPLOI': 'hidden field', 'num_expl_1': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'TYPE_DOS_2': 'hidden field', 'PRECISION': 'hidden field', 'AD_SMT': 'hidden field', 'AD_BAF': 'hidden field', 'TYPO_CDF': 'hidden field', 'STATUT': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Distancedereculautourdubti_129.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Btiagricole_130.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Primtredeprotectionincendie100m_131.set('fieldLabels', {'ID': 'hidden field', });
lyr_Primtredeprotectionincendie15m_132.set('fieldLabels', {'ID': 'hidden field', });
lyr_lotsanonymesPAC_133.set('fieldLabels', {'NUM_ILOTS': 'hidden field', 'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'COMMUNE': 'hidden field', 'CODE_INSEE': 'hidden field', 'S_CADASTRA': 'hidden field', 'S_CALC_MAP': 'hidden field', });
lyr_Corpsdeferme_134.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'REALISATIO': 'hidden field', 'DATE': 'hidden field', 'NUM_EXPLOI': 'hidden field', 'num_expl_1': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'TYPE_DOS_2': 'hidden field', 'PRECISION': 'hidden field', 'AD_SMT': 'hidden field', 'AD_BAF': 'hidden field', 'TYPO_CDF': 'hidden field', 'STATUT': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Distancedereculautourdubti_135.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Btiagricole_136.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Zonedactivitetdeservice_137.set('fieldLabels', {'ID': 'hidden field', 'CATEGORIE': 'hidden field', 'NATURE': 'hidden field', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'FICTIF': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ID_BAN': 'hidden field', 'NOMCOMMERC': 'hidden field', });
lyr_ERP_138.set('fieldLabels', {'ID': 'hidden field', 'ID_REF': 'hidden field', 'CATEGORIE': 'hidden field', 'TYPE_1': 'hidden field', 'TYPE_2': 'hidden field', 'ACTIV_1': 'hidden field', 'ACTIV_2': 'hidden field', 'LIBELLE': 'inline label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PUBLIC': 'hidden field', 'OUVERT': 'hidden field', 'CAP_ACC': 'hidden field', 'CAP_HEBERG': 'hidden field', 'ORIGIN_GEO': 'hidden field', 'TYPE_LOC': 'hidden field', 'VALID_IGN': 'hidden field', 'CODE_INSEE': 'hidden field', 'SIRET': 'hidden field', 'ADR_NUMERO': 'hidden field', 'ADR_REP': 'hidden field', 'ADR_COMPL': 'hidden field', 'ADR_NOM_1': 'hidden field', 'ADR_NOM_2': 'hidden field', 'CODE_POST': 'hidden field', 'ID_BATI': 'hidden field', 'ID_ENCEINT': 'hidden field', });
lyr_PPE_139.set('fieldLabels', {'code_pp': 'hidden field', 'source': 'hidden field', 'precision': 'hidden field', 'qualite': 'hidden field', 'siren_ars': 'hidden field', 'diffusion': 'hidden field', '_edit_date': 'hidden field', 'projet': 'hidden field', 'psv_code': 'hidden field', 'code_ins': 'hidden field', 'ins_cap_re': 'hidden field', 'ins_pro_et': 'hidden field', 'ins_pro__1': 'hidden field', });
lyr_PPI_140.set('fieldLabels', {'code_pp': 'hidden field', 'source': 'hidden field', 'precision': 'hidden field', 'qualite': 'hidden field', 'siren_ars': 'hidden field', 'diffusion': 'hidden field', '_edit_date': 'hidden field', 'projet': 'hidden field', 'psv_code': 'hidden field', 'code_ins': 'hidden field', 'ins_cap_re': 'hidden field', 'ins_pro_et': 'hidden field', 'ins_pro__1': 'hidden field', });
lyr_PPR_141.set('fieldLabels', {'code_pp': 'hidden field', 'source': 'hidden field', 'precision': 'hidden field', 'qualite': 'hidden field', 'siren_ars': 'hidden field', 'diffusion': 'hidden field', '_edit_date': 'hidden field', 'projet': 'hidden field', 'psv_code': 'hidden field', 'code_ins': 'hidden field', 'ins_cap_re': 'hidden field', 'ins_pro_et': 'hidden field', 'ins_pro__1': 'hidden field', });
lyr_Fortspubliques_142.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', });
lyr_Haies_143.set('fieldLabels', {'ID': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'HAUTEUR': 'hidden field', 'LARGEUR': 'inline label - visible with data', 'SOURCES': 'inline label - visible with data', 'ID_SOURCES': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', });
lyr_Trononshydrographiques_144.set('fieldLabels', {'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'hidden field', 'FICTIF': 'hidden field', 'ETAT': 'hidden field', 'POS_SOL': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'FOSSE': 'hidden field', 'NAVIGABL': 'hidden field', 'SALINITE': 'hidden field', 'NUM_ORDRE': 'hidden field', 'CLA_ORDRE': 'hidden field', 'ORIGINE': 'hidden field', 'PER_ORDRE': 'hidden field', 'SENS_ECOUL': 'hidden field', 'RES_COULAN': 'hidden field', 'DELIMIT': 'hidden field', 'LARGEUR': 'hidden field', 'BRAS': 'hidden field', 'COMMENT': 'hidden field', 'CODE_CARTH': 'hidden field', 'IPE': 'hidden field', 'ID_IPE': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_S_HYDRO': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Surfaceshydrographiques_145.set('fieldLabels', {'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'inline label - visible with data', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'SALINITE': 'hidden field', 'ORIGINE': 'hidden field', 'COMMENT': 'hidden field', 'ID_P_EAU': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_P_EAU': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Dtailshydrographiques_146.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'NAT_DETAIL': 'hidden field', 'PERSISTANC': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ID_BAN': 'hidden field', });
lyr_MaresPRAM_147.set('fieldLabels', {'_uid_': 'hidden field', 'l_id': 'hidden field', 'l_idstrp': 'hidden field', 'date_local': 'hidden field', 'statut_mar': 'hidden field', 'type_m': 'hidden field', });
lyr_Bassinversanttopographique_148.set('fieldLabels', {'ID_C_EAU': 'hidden field', 'CODE_CARTH': 'hidden field', 'CODE_BH': 'hidden field', 'COMMENT': 'hidden field', 'ORIGINE': 'hidden field', 'B_FLUVIAL': 'hidden field', 'STATUT': 'hidden field', 'SRC_COORD': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ID_SOURCE': 'hidden field', 'SOURCE': 'hidden field', 'DATE_CONF': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_CREAT': 'hidden field', 'BASS_HYDRO': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'CODE_HYDRO': 'hidden field', 'ID': 'hidden field', });
lyr_Toponymiehydrographie_149.set('fieldLabels', {'ID': 'hidden field', 'CLASSE': 'hidden field', 'NATURE': 'hidden field', 'GRAPHIE': 'inline label - visible with data', 'SOURCE': 'hidden field', 'STATUT_TOP': 'hidden field', 'DATE_TOP': 'hidden field', 'LANGUE': 'hidden field', });
lyr_ZPPAGournayenBrayZone2_150.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ZPPAGournayenBrayZone1_151.set('fieldLabels', {'id': 'hidden field', 'commune': 'hidden field', 'prefixe': 'hidden field', 'section': 'hidden field', 'numero': 'hidden field', 'contenance': 'hidden field', 'created': 'hidden field', 'updated': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Sitesauxabords_152.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_SUPMH_153.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - always visible', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_SPR_154.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_Sitesclasss_155.set('fieldLabels', {'idsite': 'hidden field', 'idintgest': 'hidden field', 'dep': 'hidden field', 'nomsite': 'inline label - visible with data', 'type': 'hidden field', 'descriptio': 'hidden field', 'nature': 'hidden field', 'datedecis': 'hidden field', 'datedecisr': 'hidden field', 'surfoffic': 'hidden field', 'echnum': 'hidden field', 'precision': 'hidden field', 'srcgeogen': 'hidden field', 'datesrcgen': 'hidden field', 'surfcalc': 'hidden field', 'surfmer': 'hidden field', 'urlfiche': 'hidden field', 'urltxtrgl': 'hidden field', 'urlcarte': 'hidden field', 'urlcartec': 'hidden field', 'urlweb': 'hidden field', 'urlcarmen': 'hidden field', });
lyr_Sitesinscrits_156.set('fieldLabels', {'idsite': 'hidden field', 'idintgest': 'hidden field', 'dep': 'hidden field', 'nomsite': 'inline label - visible with data', 'type': 'hidden field', 'descriptio': 'hidden field', 'nature': 'hidden field', 'datedecis': 'hidden field', 'datedecisr': 'hidden field', 'surfoffic': 'hidden field', 'echnum': 'hidden field', 'precision': 'hidden field', 'srcgeogen': 'hidden field', 'datesrcgen': 'hidden field', 'surfcalc': 'hidden field', 'surfmer': 'hidden field', 'urlfiche': 'hidden field', 'urltxtrgl': 'hidden field', 'urlcarte': 'hidden field', 'urlcartec': 'hidden field', 'urlweb': 'hidden field', 'urlcarmen': 'hidden field', });
lyr_Immeubles_157.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - visible with data', 'categorie': 'inline label - visible with data', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_ZPPAindiffrencies_158.set('fieldLabels', {'EA_NATCODE': 'inline label - visible with data', 'COMMUNE_PP': 'hidden field', 'NUMORDRE': 'hidden field', 'NUMERO': 'inline label - visible with data', 'NUMERO_DRA': 'hidden field', 'NOMUSUEL': 'inline label - visible with data', 'LIEU_IGN': 'hidden field', 'LIEU_CADAS': 'hidden field', 'VESTIGES': 'hidden field', 'NATURE_VES': 'hidden field', 'CHRONO_DEB': 'hidden field', 'CHRONO_FIN': 'hidden field', 'CHRONO_FOU': 'hidden field', 'CHRONO_DOU': 'hidden field', 'CHRONO_PER': 'hidden field', 'COMMENT_CH': 'hidden field', 'NUMERIQUE_': 'hidden field', 'NUMERIQU_1': 'hidden field', 'CHRONO_D_1': 'hidden field', 'X_SAISI': 'hidden field', 'Y_SAISI': 'hidden field', 'SURFACE': 'hidden field', 'PARCELLES': 'hidden field', 'INVENTEUR': 'hidden field', 'ANNEE_DECO': 'inline label - visible with data', 'X_DEGRE': 'hidden field', 'Y_DEGRE': 'hidden field', 'EMPRISE': 'hidden field', 'GEOREFEREN': 'hidden field', 'GEOMETRIE': 'hidden field', });
lyr_ZPPAindiffrenciescentrodes_159.set('fieldLabels', {'EA_NATCODE': 'hidden field', 'COMMUNE_PP': 'hidden field', 'NUMORDRE': 'hidden field', 'NUMERO': 'hidden field', 'NUMERO_DRA': 'hidden field', 'NOMUSUEL': 'hidden field', 'LIEU_IGN': 'hidden field', 'LIEU_CADAS': 'hidden field', 'VESTIGES': 'hidden field', 'NATURE_VES': 'hidden field', 'CHRONO_DEB': 'hidden field', 'CHRONO_FIN': 'hidden field', 'CHRONO_FOU': 'hidden field', 'CHRONO_DOU': 'hidden field', 'CHRONO_PER': 'hidden field', 'COMMENT_CH': 'hidden field', 'NUMERIQUE_': 'hidden field', 'NUMERIQU_1': 'hidden field', 'CHRONO_D_1': 'hidden field', 'X_SAISI': 'hidden field', 'Y_SAISI': 'hidden field', 'SURFACE': 'hidden field', 'PARCELLES': 'hidden field', 'INVENTEUR': 'hidden field', 'ANNEE_DECO': 'hidden field', 'X_DEGRE': 'hidden field', 'Y_DEGRE': 'hidden field', 'EMPRISE': 'hidden field', 'GEOREFEREN': 'hidden field', 'GEOMETRIE': 'hidden field', });
lyr_RoutesconcdesTypeC_160.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'VALIDEFIN': 'hidden field', 'LEG_SANEF': 'hidden field', });
lyr_RoutesconcdesTypeA_161.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'VALIDEDEB': 'hidden field', 'VALIDEFIN': 'hidden field', 'LEGENDPROD': 'hidden field', });
lyr_RoutesTypeC_162.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'UUEID': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'INDICETYPE': 'hidden field', 'VALIDEDEB': 'hidden field', 'VALIDEFIN': 'hidden field', });
lyr_RoutesTypeA_163.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'UUEID': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'INDICETYPE': 'hidden field', 'VALIDEDEB': 'hidden field', 'VALIDEFIN': 'hidden field', });
lyr_Canalisationshydrocarbures_164.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_CanalisationsgazGRT_165.set('fieldLabels', {'object_id': 'hidden field', 'nom_region': 'hidden field', 'departemen': 'hidden field', });
lyr_CanalisationsgazGRDF_166.set('fieldLabels', {'etat_serv': 'hidden field', 'insee_comm': 'hidden field', 'commune_ad': 'hidden field', 'code_depar': 'hidden field', 'departemen': 'hidden field', 'region_adm': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_LignesbassetensionsouterrainesENEDIS_167.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LignesbassetensionariennesENEDIS_168.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LigneshautetensionsouterrainesENEDIS_169.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LigneshautetensionariennesENEDIS_170.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LigneshautetensionRTE_171.set('fieldLabels', {'ID': 'hidden field', 'VOLTAGE': 'inline label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Postesdetransformation_172.set('fieldLabels', {'ID': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Itinraireautre_173.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', });
lyr_Voieferre_174.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'ELECTRIFIE': 'inline label - visible with data', 'LARGEUR': 'inline label - visible with data', 'NB_VOIES': 'inline label - visible with data', 'USAGE': 'hidden field', 'VITES_MAX': 'hidden field', 'ID_VFN': 'hidden field', 'TOPONYME': 'inline label - visible with data', });
lyr_RoutesdeGrandeCirculation_175.set('fieldLabels', {'objectid': 'hidden field', 'axe': 'hidden field', 'cumuld': 'hidden field', 'cumulf': 'hidden field', 'plod': 'hidden field', 'absd': 'hidden field', 'plof': 'hidden field', 'absf': 'hidden field', 'xd': 'hidden field', 'yd': 'hidden field', 'zd': 'hidden field', 'xf': 'hidden field', 'yf': 'hidden field', 'zf': 'hidden field', 'cote': 'hidden field', 'emplacemen': 'hidden field', 'voie': 'hidden field', 'distance': 'hidden field', 'accrochage': 'hidden field', 'objetid': 'hidden field', 'longueur': 'hidden field', 'releve_xy': 'hidden field', 'parent_id': 'hidden field', 'validation': 'hidden field', 'status': 'hidden field', 'link_id': 'hidden field', 'import': 'hidden field', 'user_creat': 'hidden field', 'date_creat': 'hidden field', 'user_modif': 'hidden field', 'date_modif': 'hidden field', 'territoire': 'hidden field', 'daterefere': 'hidden field', 'chaussee': 'hidden field', 'id_prj': 'hidden field', 'date_grde_': 'hidden field', 'grande_cir': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_Routesnumrotesounommes_176.set('fieldLabels', {'ID': 'hidden field', 'TYPE_ROUTE': 'hidden field', 'NUMERO': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'GESTION': 'hidden field', });
lyr_Niveaudurisque_177.set('fieldLabels', {'dpt': 'hidden field', 'niveau': 'inline label - visible with data', 'alea': 'hidden field', });
lyr_Zonesdalas_178.set('fieldLabels', {'ID_ZONE': 'hidden field', 'ID_GASPAR': 'hidden field', 'DESCRIPT': 'hidden field', 'CODERISQUE': 'hidden field', 'NOMRISQUE': 'hidden field', 'NIVALEA': 'inline label - visible with data', 'NIVALEA_ST': 'hidden field', 'TITRECARTE': 'hidden field', 'DATECARTE': 'hidden field', 'ID_MAP': 'hidden field', });
lyr_Zonesrglementaires_179.set('fieldLabels', {'id': 'hidden field', 'id_map': 'hidden field', 'id_zone': 'hidden field', 'id_gaspar': 'hidden field', 'nom': 'inline label - visible with data', 'codezone': 'hidden field', 'soumisalea': 'hidden field', 'typereg': 'hidden field', });
lyr_Ruissellement_180.set('fieldLabels', {'id': 'hidden field', 'id_map': 'hidden field', 'id_zone': 'hidden field', 'id_gaspar': 'hidden field', 'nom': 'hidden field', 'codezone': 'hidden field', 'soumisalea': 'hidden field', 'typereg': 'hidden field', });
lyr_Secteurs_181.set('fieldLabels', {'ALEA': 'inline label - visible with data', });
lyr_ICPE_182.set('fieldLabels', {'code_aiot': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'code_epsg': 'hidden field', 'nom_ets': 'inline label - visible with data', 'num_dep': 'hidden field', 'adresse': 'hidden field', 'cd_insee': 'hidden field', 'cd_postal': 'hidden field', 'commune': 'hidden field', 'code_naf': 'hidden field', 'lib_naf': 'hidden field', 'num_siret': 'hidden field', 'cd_regime': 'hidden field', 'lib_regime': 'hidden field', 'seveso': 'hidden field', 'lib_seveso': 'inline label - visible with data', 'bovins': 'hidden field', 'porcs': 'hidden field', 'volailles': 'hidden field', 'carriere': 'hidden field', 'eolienne': 'hidden field', 'industrie': 'hidden field', 'ied': 'hidden field', 'priorite_n': 'hidden field', 'url_fiche': 'hidden field', });
lyr_SitesBASOL_183.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_etab': 'inline label - visible with data', 'nom_instr': 'hidden field', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'hidden field', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_Sitespollus_184.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_ets': 'inline label - visible with data', 'nom_site': 'hidden field', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'hidden field', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_Zonesimpermables_185.set('fieldLabels', {'Id': 'hidden field', });
lyr_Remontesdenappes_186.set('fieldLabels', {'CLASSE': 'inline label - visible with data', 'FIAB_MNT': 'hidden field', 'FIAB_ESO': 'hidden field', 'FIAB_TOT': 'hidden field', 'CLASSEFIAB': 'hidden field', 'gridcode': 'hidden field', });
lyr_ZNIEFFtype2_187.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_ZNIEFFtype1_188.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Zoneshumides_189.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Natura2000_190.set('fieldLabels', {'SITECODE': 'hidden field', 'SITENAME': 'hidden field', });
lyr_Cimetire_191.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Rservoir_192.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'HAUTEUR': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'VOLUME': 'inline label - visible with data', });
lyr_Terraindesport_193.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Monument_194.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'USAGE1': 'header label - always visible', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'hidden field', 'MAT_MURS': 'hidden field', 'MAT_TOITS': 'hidden field', 'HAUTEUR': 'header label - always visible', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Indiffrenci_195.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'USAGE1': 'inline label - visible with data', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'inline label - visible with data', 'NB_ETAGES': 'inline label - visible with data', 'MAT_MURS': 'inline label - visible with data', 'MAT_TOITS': 'inline label - visible with data', 'HAUTEUR': 'hidden field', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Industrielagricoleoucommercial_196.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'USAGE1': 'inline label - visible with data', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'inline label - visible with data', 'MAT_MURS': 'hidden field', 'MAT_TOITS': 'inline label - visible with data', 'HAUTEUR': 'inline label - visible with data', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Constructionsponctuelles_197.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'HAUTEUR': 'hidden field', });
lyr_Pylne_198.set('fieldLabels', {'ID': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'HAUTEUR': 'inline label - visible with data', });
lyr_CCdes4Rivires_199.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CCBrayEawy_200.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CCdeLondinieres_201.set('fieldLabels', {'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Parcellescadastrales_202.set('fieldLabels', {'id': 'hidden field', 'commune': 'hidden field', 'prefixe': 'hidden field', 'section': 'inline label - visible with data', 'numero': 'inline label - visible with data', 'contenance': 'hidden field', 'created': 'hidden field', 'updated': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communesassociesoudlgues_203.set('fieldLabels', {'ID': 'hidden field', 'INSEE_CAD': 'hidden field', 'INSEE_COM': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'POPULATION': 'hidden field', 'CODE_SIREN': 'hidden field', });
lyr_CommunesadhrentesADS_204.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communes_205.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'inline label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_206.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_206.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});