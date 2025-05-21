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
    <img src="styles/legend/Secteurs_32_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_32_1.png" /> SC<br />' });
var format_Codessecteurs_33 = new ol.format.GeoJSON();
var features_Codessecteurs_33 = format_Codessecteurs_33.readFeatures(json_Codessecteurs_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_33.addFeatures(features_Codessecteurs_33);
var lyr_Codessecteurs_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_33, 
                style: style_Codessecteurs_33,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_34 = new ol.format.GeoJSON();
var features_Secteurs_34 = format_Secteurs_34.readFeatures(json_Secteurs_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_34.addFeatures(features_Secteurs_34);
var lyr_Secteurs_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_34, 
                style: style_Secteurs_34,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_34_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_34_1.png" /> SU<br />' });
var format_Codessecteurs_35 = new ol.format.GeoJSON();
var features_Codessecteurs_35 = format_Codessecteurs_35.readFeatures(json_Codessecteurs_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_35.addFeatures(features_Codessecteurs_35);
var lyr_Codessecteurs_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_35, 
                style: style_Codessecteurs_35,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_36 = new ol.format.GeoJSON();
var features_Secteurs_36 = format_Secteurs_36.readFeatures(json_Secteurs_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_36.addFeatures(features_Secteurs_36);
var lyr_Secteurs_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_36, 
                style: style_Secteurs_36,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_36_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_36_1.png" /> SU<br />' });
var format_Codessecteurs_37 = new ol.format.GeoJSON();
var features_Codessecteurs_37 = format_Codessecteurs_37.readFeatures(json_Codessecteurs_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_37.addFeatures(features_Codessecteurs_37);
var lyr_Codessecteurs_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_37, 
                style: style_Codessecteurs_37,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_38 = new ol.format.GeoJSON();
var features_Secteurs_38 = format_Secteurs_38.readFeatures(json_Secteurs_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_38.addFeatures(features_Secteurs_38);
var lyr_Secteurs_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_38, 
                style: style_Secteurs_38,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_38_0.png" /> ZC<br />\
    <img src="styles/legend/Secteurs_38_1.png" /> ZNC<br />' });
var format_Codessecteurs_39 = new ol.format.GeoJSON();
var features_Codessecteurs_39 = format_Codessecteurs_39.readFeatures(json_Codessecteurs_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_39.addFeatures(features_Codessecteurs_39);
var lyr_Codessecteurs_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_39, 
                style: style_Codessecteurs_39,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_40 = new ol.format.GeoJSON();
var features_Secteurs_40 = format_Secteurs_40.readFeatures(json_Secteurs_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_40.addFeatures(features_Secteurs_40);
var lyr_Secteurs_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_40, 
                style: style_Secteurs_40,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_40_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_40_1.png" /> U<br />' });
var format_Codessecteurs_41 = new ol.format.GeoJSON();
var features_Codessecteurs_41 = format_Codessecteurs_41.readFeatures(json_Codessecteurs_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_41.addFeatures(features_Codessecteurs_41);
var lyr_Codessecteurs_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_41, 
                style: style_Codessecteurs_41,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_42 = new ol.format.GeoJSON();
var features_Secteurs_42 = format_Secteurs_42.readFeatures(json_Secteurs_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_42.addFeatures(features_Secteurs_42);
var lyr_Secteurs_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_42, 
                style: style_Secteurs_42,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_42_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_42_1.png" /> SU<br />' });
var format_Codessecteurs_43 = new ol.format.GeoJSON();
var features_Codessecteurs_43 = format_Codessecteurs_43.readFeatures(json_Codessecteurs_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_43.addFeatures(features_Codessecteurs_43);
var lyr_Codessecteurs_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_43, 
                style: style_Codessecteurs_43,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_44 = new ol.format.GeoJSON();
var features_Secteurs_44 = format_Secteurs_44.readFeatures(json_Secteurs_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_44.addFeatures(features_Secteurs_44);
var lyr_Secteurs_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_44, 
                style: style_Secteurs_44,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_44_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_44_1.png" /> AUa<br />\
    <img src="styles/legend/Secteurs_44_2.png" /> N<br />\
    <img src="styles/legend/Secteurs_44_3.png" /> Nhd<br />\
    <img src="styles/legend/Secteurs_44_4.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_44_5.png" /> Uz<br />' });
var format_Prescriptionssurfaciques2_45 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques2_45 = format_Prescriptionssurfaciques2_45.readFeatures(json_Prescriptionssurfaciques2_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques2_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques2_45.addFeatures(features_Prescriptionssurfaciques2_45);
var lyr_Prescriptionssurfaciques2_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques2_45, 
                style: style_Prescriptionssurfaciques2_45,
                popuplayertitle: 'Prescriptions surfaciques 2',
                interactive: true,
    title: 'Prescriptions surfaciques 2<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_45_0.png" /> Couloir de nuisances sonores<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_45_1.png" /> Droit de préemption urbain envisagé<br />' });
var format_Prescriptionssurfaciques1_46 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques1_46 = format_Prescriptionssurfaciques1_46.readFeatures(json_Prescriptionssurfaciques1_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques1_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques1_46.addFeatures(features_Prescriptionssurfaciques1_46);
var lyr_Prescriptionssurfaciques1_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques1_46, 
                style: style_Prescriptionssurfaciques1_46,
                popuplayertitle: 'Prescriptions surfaciques 1',
                interactive: true,
    title: 'Prescriptions surfaciques 1<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_0.png" /> Emplacement réservé n°1 - chemins piétons<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_1.png" /> Emplacement réservé n°2 - création de voie<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_2.png" /> Espaces boisés  à conserver<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_3.png" /> Orientations d\'aménagement parcelle 408 village zone Ua<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_4.png" /> Orientations d\'aménagement zone AUa centre village<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_5.png" /> Secteurs d\'expansion des axes de ruissellements des eaux pluviales<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_6.png" /> Secteurs non constructibles-Présence de cavité souterraine<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_7.png" /> Parcelle napoléonienne n°10<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_8.png" /> Parcelle napoléonienne n°11<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_9.png" /> Parcelle napoléonienne n°12<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_10.png" /> Parcelle napoléonienne n°13<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_11.png" /> Parcelle napoléonienne n°14<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_12.png" /> Parcelle napoléonienne n°15<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_13.png" /> Parcelle napoléonienne n°16<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_14.png" /> Parcelle napoléonienne n°17<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_15.png" /> Parcelle napoléonienne n°18<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_16.png" /> Parcelle napoléonienne n°19<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_17.png" /> Parcelle napoléonienne n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_18.png" /> Parcelle napoléonienne n°20<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_19.png" /> Parcelle napoléonienne n°21<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_20.png" /> Parcelle napoléonienne n°22<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_21.png" /> Parcelle napoléonienne n°23<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_22.png" /> Parcelle napoléonienne n°3-4<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_23.png" /> Parcelle napoléonienne n°6<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_24.png" /> Parcelle napoléonienne n°7<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_25.png" /> Parcelle napoléonienne n°8<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_46_26.png" /> Parcelle napoléonnienne n°9<br />' });
var format_Prescriptionslinaire_47 = new ol.format.GeoJSON();
var features_Prescriptionslinaire_47 = format_Prescriptionslinaire_47.readFeatures(json_Prescriptionslinaire_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaire_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaire_47.addFeatures(features_Prescriptionslinaire_47);
var lyr_Prescriptionslinaire_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaire_47, 
                style: style_Prescriptionslinaire_47,
                popuplayertitle: 'Prescriptions linéaire',
                interactive: true,
    title: 'Prescriptions linéaire<br />\
    <img src="styles/legend/Prescriptionslinaire_47_0.png" /> Alignements d\'arbres à protéger<br />\
    <img src="styles/legend/Prescriptionslinaire_47_1.png" /> Axes de ruissellement des eaux pluviales<br />\
    <img src="styles/legend/Prescriptionslinaire_47_2.png" /> Haies à conserver<br />\
    <img src="styles/legend/Prescriptionslinaire_47_3.png" /> Haies à créer<br />' });
var format_Prescriptionsponctuelles_48 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_48 = format_Prescriptionsponctuelles_48.readFeatures(json_Prescriptionsponctuelles_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_48.addFeatures(features_Prescriptionsponctuelles_48);
var lyr_Prescriptionsponctuelles_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_48, 
                style: style_Prescriptionsponctuelles_48,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_0.png" /> Arbre isolé  à  protéger<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_1.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°1 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_2.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°2 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_3.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°3 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_4.png" /> Bâtis agri. d\'int. architectural ou patrimonial n°4 peut changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_5.png" /> Carrière à ciel ouvert (24)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_6.png" /> Cavité souterraine orig. naturelle avec  périm. protect.  inconstr. 35m  (32)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_7.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m  (27)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_8.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (29)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_9.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (30)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_10.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (31)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_11.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (33)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_12.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (34)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_13.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (35)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_14.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (36)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_15.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (37)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_16.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (38)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_17.png" /> Cavités Souterr. orig. anthropiques avec périm. protect. inconstr. 35/60 m (41)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_18.png" /> Puits, puisards (28)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_19.png" /> Puits, puisards (39)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_20.png" /> Puits, puisards (42)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_48_21.png" /> Site suceptible d\'être pollué (source BASIAS)<br />' });
var format_Codessecteurs_49 = new ol.format.GeoJSON();
var features_Codessecteurs_49 = format_Codessecteurs_49.readFeatures(json_Codessecteurs_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_49.addFeatures(features_Codessecteurs_49);
var lyr_Codessecteurs_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_49, 
                style: style_Codessecteurs_49,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_50 = new ol.format.GeoJSON();
var features_Secteurs_50 = format_Secteurs_50.readFeatures(json_Secteurs_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_50.addFeatures(features_Secteurs_50);
var lyr_Secteurs_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_50, 
                style: style_Secteurs_50,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_50_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_50_1.png" /> SC<br />' });
var format_Codessecteurs_51 = new ol.format.GeoJSON();
var features_Codessecteurs_51 = format_Codessecteurs_51.readFeatures(json_Codessecteurs_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_51.addFeatures(features_Codessecteurs_51);
var lyr_Codessecteurs_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_51, 
                style: style_Codessecteurs_51,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_52 = new ol.format.GeoJSON();
var features_Secteurs_52 = format_Secteurs_52.readFeatures(json_Secteurs_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_52.addFeatures(features_Secteurs_52);
var lyr_Secteurs_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_52, 
                style: style_Secteurs_52,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_52_0.png" /> Secteur d\'ac<br />\
    <img src="styles/legend/Secteurs_52_1.png" /> Secteur Natu<br />\
    <img src="styles/legend/Secteurs_52_2.png" /> Secteur urba<br />\
    <img src="styles/legend/Secteurs_52_3.png" /> Secteur Urba<br />' });
var format_Secteurs_53 = new ol.format.GeoJSON();
var features_Secteurs_53 = format_Secteurs_53.readFeatures(json_Secteurs_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_53.addFeatures(features_Secteurs_53);
var lyr_Secteurs_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_53, 
                style: style_Secteurs_53,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_53_0.png" /> A<br />\
    <img src="styles/legend/Secteurs_53_1.png" /> Ap<br />\
    <img src="styles/legend/Secteurs_53_2.png" /> At<br />\
    <img src="styles/legend/Secteurs_53_3.png" /> AUh<br />\
    <img src="styles/legend/Secteurs_53_4.png" /> AUr<br />\
    <img src="styles/legend/Secteurs_53_5.png" /> AUy1<br />\
    <img src="styles/legend/Secteurs_53_6.png" /> AUy2<br />\
    <img src="styles/legend/Secteurs_53_7.png" /> N<br />\
    <img src="styles/legend/Secteurs_53_8.png" /> Uc1<br />\
    <img src="styles/legend/Secteurs_53_9.png" /> Uc2<br />\
    <img src="styles/legend/Secteurs_53_10.png" /> Ud<br />\
    <img src="styles/legend/Secteurs_53_11.png" /> Uh<br />\
    <img src="styles/legend/Secteurs_53_12.png" /> Up<br />\
    <img src="styles/legend/Secteurs_53_13.png" /> Ur<br />\
    <img src="styles/legend/Secteurs_53_14.png" /> Uy<br />' });
var format_Prescriptionssurfaciques_54 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_54 = format_Prescriptionssurfaciques_54.readFeatures(json_Prescriptionssurfaciques_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_54.addFeatures(features_Prescriptionssurfaciques_54);
var lyr_Prescriptionssurfaciques_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_54, 
                style: style_Prescriptionssurfaciques_54,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_0.png" /> Bâtiment agricole susceptible de changer de destination<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_1.png" /> Emplacement réservé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_2.png" /> Espace boisé classé (L113-1 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_3.png" /> Mare (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_4.png" /> Patrimoine emblématique et remarquable (L151-19 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_5.png" /> Petits éléments du patrimoine (L151-19 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_6.png" /> Risque d\'effondrement de cavités<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_7.png" /> Verger (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_8.png" /> Zone à prescriptions hydrauliques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_9.png" /> Zone de danger industriel<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_10.png" /> Zone inondable<br />\
    <img src="styles/legend/Prescriptionssurfaciques_54_11.png" /> Zone potentiellement inondable<br />' });
var format_Prescriptionslinaires_55 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_55 = format_Prescriptionslinaires_55.readFeatures(json_Prescriptionslinaires_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_55.addFeatures(features_Prescriptionslinaires_55);
var lyr_Prescriptionslinaires_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_55, 
                style: style_Prescriptionslinaires_55,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_55_0.png" /> Alignement d\'arbres (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionslinaires_55_1.png" /> Espace boisé classé (L113-1 CU)<br />\
    <img src="styles/legend/Prescriptionslinaires_55_2.png" /> Fossé  (L151-23 CU)<br />\
    <img src="styles/legend/Prescriptionslinaires_55_3.png" /> Haie basse (L151-23 CU)<br />' });
var format_Prescriptionsponctuelles_56 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_56 = format_Prescriptionsponctuelles_56.readFeatures(json_Prescriptionsponctuelles_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_56.addFeatures(features_Prescriptionsponctuelles_56);
var lyr_Prescriptionsponctuelles_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_56, 
                style: style_Prescriptionsponctuelles_56,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_56_0.png" /> Espace boisé classé (L113-1 CU)<br />' });
var format_Codessecteurs_57 = new ol.format.GeoJSON();
var features_Codessecteurs_57 = format_Codessecteurs_57.readFeatures(json_Codessecteurs_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_57.addFeatures(features_Codessecteurs_57);
var lyr_Codessecteurs_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_57, 
                style: style_Codessecteurs_57,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
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
    <img src="styles/legend/Secteurs_58_1.png" /> An<br />\
    <img src="styles/legend/Secteurs_58_2.png" /> Ap<br />\
    <img src="styles/legend/Secteurs_58_3.png" /> AUE<br />\
    <img src="styles/legend/Secteurs_58_4.png" /> AUEa<br />\
    <img src="styles/legend/Secteurs_58_5.png" /> AUR<br />\
    <img src="styles/legend/Secteurs_58_6.png" /> AURa<br />\
    <img src="styles/legend/Secteurs_58_7.png" /> N<br />\
    <img src="styles/legend/Secteurs_58_8.png" /> Na<br />\
    <img src="styles/legend/Secteurs_58_9.png" /> UC<br />\
    <img src="styles/legend/Secteurs_58_10.png" /> UE<br />\
    <img src="styles/legend/Secteurs_58_11.png" /> UH<br />\
    <img src="styles/legend/Secteurs_58_12.png" /> UR<br />' });
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
    <img src="styles/legend/Prescriptionssurfaciques_59_0.png" /> Emplacement réservé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_1.png" /> Espace boisé classé<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_2.png" /> Espace paysager à protéger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_3.png" /> Expansion des ruissellements<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_4.png" /> Patrimoine bati à protéger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_5.png" /> Secteur de risque lié aux présomptions de vides et indices de vides<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_6.png" /> verger<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_7.png" /> Zone de vigilance<br />\
    <img src="styles/legend/Prescriptionssurfaciques_59_8.png" /> Zone potentiellement inondable<br />' });
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
                title: '<img src="styles/legend/Prescriptionslinaires_60.png" /> Prescriptions linéaires'
            });
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
    <img src="styles/legend/Prescriptionsponctuelles_61_0.png" /> Batiment pouvant changer de destination<br />\
    <img src="styles/legend/Prescriptionsponctuelles_61_1.png" /> Mare à protéger<br />' });
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
    <img src="styles/legend/Secteurs_63_0.png" /> UCp<br />\
    <img src="styles/legend/Secteurs_63_1.png" /> UFp<br />\
    <img src="styles/legend/Secteurs_63_2.png" /> UH<br />\
    <img src="styles/legend/Secteurs_63_3.png" /> UR<br />\
    <img src="styles/legend/Secteurs_63_4.png" /> UE<br />\
    <img src="styles/legend/Secteurs_63_5.png" /> UV<br />\
    <img src="styles/legend/Secteurs_63_6.png" /> UZa<br />\
    <img src="styles/legend/Secteurs_63_7.png" /> UZi<br />\
    <img src="styles/legend/Secteurs_63_8.png" /> UZc<br />\
    <img src="styles/legend/Secteurs_63_9.png" /> UZcp<br />\
    <img src="styles/legend/Secteurs_63_10.png" /> UZe<br />\
    <img src="styles/legend/Secteurs_63_11.png" /> UZep<br />\
    <img src="styles/legend/Secteurs_63_12.png" /> AUE1<br />\
    <img src="styles/legend/Secteurs_63_13.png" /> AUE2<br />\
    <img src="styles/legend/Secteurs_63_14.png" /> 1AUHs<br />\
    <img src="styles/legend/Secteurs_63_15.png" /> 1AUHm<br />\
    <img src="styles/legend/Secteurs_63_16.png" /> 2AUV<br />\
    <img src="styles/legend/Secteurs_63_17.png" /> A<br />\
    <img src="styles/legend/Secteurs_63_18.png" /> As<br />\
    <img src="styles/legend/Secteurs_63_19.png" /> Aze<br />\
    <img src="styles/legend/Secteurs_63_20.png" /> N<br />\
    <img src="styles/legend/Secteurs_63_21.png" /> Np<br />\
    <img src="styles/legend/Secteurs_63_22.png" /> Na<br />\
    <img src="styles/legend/Secteurs_63_23.png" /> Nap<br />\
    <img src="styles/legend/Secteurs_63_24.png" /> Nj<br />' });
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
    <img src="styles/legend/Prescriptionssurfaciques_64_0.png" /> Emplacement réservé n°1 (Amélioration du virage)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_1.png" /> Espace boisé L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_2.png" /> Mare L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_3.png" /> Parcs, fossés et jardins L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_4.png" /> Périmètre OAP n°1 (Les Monts Foys IV)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_5.png" /> Périmètre OAP n°2 (La Côte de Saint Aubin)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_6.png" /> Périmètre OAP n°3 (Saint Clair Nord)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_7.png" /> Périmètre OAP n°4 (Equipements publics de l’avenue des anciens combattants)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_8.png" /> Périmètre OAP n°5 (Nouveau groupe scolaire)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_9.png" /> Périmètre OAP n°6 (Parking nord de l\'Atelier)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_10.png" /> Risque d’inondation par crue de rivière - aléa faible<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_11.png" /> Risque d’inondation par crue de rivière - aléa fort<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_12.png" /> Risque d’inondation par ruissellement<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_13.png" /> Risque géologique<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_14.png" /> Verger L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_15.png" /> Zone des effets indirects par bris de verre (Zbv)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_16.png" /> Zone des effets irréversibles (Zei)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_17.png" /> Zone des premiers effets létaux (Zpel)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_64_18.png" /> Zone humide L151-23 CU<br />' });
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
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_65_0.png" /> Alignement d’arbres (haie basse) L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_65_1.png" /> Alignement d’arbres de haut-jet L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_65_2.png" /> Alignement d’arbres en taillis ou moyen développement L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_65_3.png" /> Ripisylve basse L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_65_4.png" /> Ripisylve haute L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_65_5.png" /> Cours d’eau L151-23 CU (Canal des Planquettes)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_6.png" /> Cours d’eau L151-23 CU (Canal des Tanneurs)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_7.png" /> Cours d’eau L151-23 CU (L\'Epte)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_8.png" /> Cours d’eau L151-23 CU (La Morette)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_9.png" /> Cours d’eau L151-23 CU (Le Gouffre)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_10.png" /> Mur remarquable L151-19 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_65_11.png" /> Mur remarquable L151-19 CU (Clôture en fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_12.png" /> Mur remarquable L151-19 CU (Emmarchement monumental)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_13.png" /> Mur remarquable L151-19 CU (Grille et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_14.png" /> Mur remarquable L151-19 CU (Grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_15.png" /> Mur remarquable L151-19 CU (Mur d\'enceinte du cimetière)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_16.png" /> Mur remarquable L151-19 CU (Mur en brique - portions en fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_17.png" /> Mur remarquable L151-19 CU (Mur en brique)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_18.png" /> Mur remarquable L151-19 CU (Mur en pierre et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_19.png" /> Mur remarquable L151-19 CU (Mur en pierre surmonté de fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_20.png" /> Mur remarquable L151-19 CU (Mur en pierre)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_21.png" /> Mur remarquable L151-19 CU (Mur et grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_22.png" /> Mur remarquable L151-19 CU (Mur et porche)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_23.png" /> Mur remarquable L151-19 CU (Mur et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_24.png" /> Mur remarquable L151-19 CU (Mur et portails)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_25.png" /> Mur remarquable L151-19 CU (Mur maçonné et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_26.png" /> Mur remarquable L151-19 CU (Mur, grille et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_27.png" /> Mur remarquable L151-19 CU (Mur)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_28.png" /> Mur remarquable L151-19 CU (Muret et grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_29.png" /> Mur remarquable L151-19 CU (Muret)<br />\
    <img src="styles/legend/Prescriptionslinaires_65_30.png" /> Linéaire de préservation de la diversité commerciale L151-16 CU<br />' });
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
    <img src="styles/legend/Prescriptionsponctuelles_66_0.png" /> Arbre isolé L151-23 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_1.png" /> Arbre isolé L151-23 CU (Cèdre bleu)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_2.png" /> Bâtiment pouvant changer de destination en zone agricole L151-11-2 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_3.png" /> Construction remarquable L151-19 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_4.png" /> Construction remarquable L151-19 CU (Ancienne ferme)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_5.png" /> Construction remarquable L151-19 CU (Anciens abattoirs)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_6.png" /> Construction remarquable L151-19 CU (Chapelle)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_7.png" /> Construction remarquable L151-19 CU (Château Pommel)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_8.png" /> Construction remarquable L151-19 CU (Maison de maître)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_9.png" /> Construction remarquable L151-19 CU (Maison éclectique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_10.png" /> Construction remarquable L151-19 CU (Maison ouvrière post-classique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_11.png" /> Construction remarquable L151-19 CU (Maison style éclectique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_66_12.png" /> Construction remarquable L151-19 CU (Villa style anglo-normand)<br />' });
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
    <img src="styles/legend/Secteurs_68_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_68_1.png" /> U<br />' });
var format_Codessecteurs_69 = new ol.format.GeoJSON();
var features_Codessecteurs_69 = format_Codessecteurs_69.readFeatures(json_Codessecteurs_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_69.addFeatures(features_Codessecteurs_69);
var lyr_Codessecteurs_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_69, 
                style: style_Codessecteurs_69,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_70 = new ol.format.GeoJSON();
var features_Secteurs_70 = format_Secteurs_70.readFeatures(json_Secteurs_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_70.addFeatures(features_Secteurs_70);
var lyr_Secteurs_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_70, 
                style: style_Secteurs_70,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_70_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_70_1.png" /> SU<br />' });
var format_Codessecteurs_71 = new ol.format.GeoJSON();
var features_Codessecteurs_71 = format_Codessecteurs_71.readFeatures(json_Codessecteurs_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_71.addFeatures(features_Codessecteurs_71);
var lyr_Codessecteurs_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_71, 
                style: style_Codessecteurs_71,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_72 = new ol.format.GeoJSON();
var features_Secteurs_72 = format_Secteurs_72.readFeatures(json_Secteurs_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_72.addFeatures(features_Secteurs_72);
var lyr_Secteurs_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_72, 
                style: style_Secteurs_72,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_72_0.png" /> 1AU<br />\
    <img src="styles/legend/Secteurs_72_1.png" /> 2AU<br />\
    <img src="styles/legend/Secteurs_72_2.png" /> 4AU<br />\
    <img src="styles/legend/Secteurs_72_3.png" /> A<br />\
    <img src="styles/legend/Secteurs_72_4.png" /> N<br />\
    <img src="styles/legend/Secteurs_72_5.png" /> Ne<br />\
    <img src="styles/legend/Secteurs_72_6.png" /> Nt<br />\
    <img src="styles/legend/Secteurs_72_7.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_72_8.png" /> Ub<br />\
    <img src="styles/legend/Secteurs_72_9.png" /> Uc<br />\
    <img src="styles/legend/Secteurs_72_10.png" /> Ue<br />\
    <img src="styles/legend/Secteurs_72_11.png" /> Uj<br />\
    <img src="styles/legend/Secteurs_72_12.png" /> Ut<br />\
    <img src="styles/legend/Secteurs_72_13.png" /> Uy<br />' });
var format_Prescriptionssurfaciques2_73 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques2_73 = format_Prescriptionssurfaciques2_73.readFeatures(json_Prescriptionssurfaciques2_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques2_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques2_73.addFeatures(features_Prescriptionssurfaciques2_73);
var lyr_Prescriptionssurfaciques2_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques2_73, 
                style: style_Prescriptionssurfaciques2_73,
                popuplayertitle: 'Prescriptions surfaciques 2',
                interactive: true,
    title: 'Prescriptions surfaciques 2<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_73_0.png" /> Débordement de cours d\'eau<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_73_1.png" /> Indice de cavité souterraine<br />\
    <img src="styles/legend/Prescriptionssurfaciques2_73_2.png" /> Largeur d\'expansion des ruissellements<br />' });
var format_Prescriptionssurfaciques1_74 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques1_74 = format_Prescriptionssurfaciques1_74.readFeatures(json_Prescriptionssurfaciques1_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques1_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques1_74.addFeatures(features_Prescriptionssurfaciques1_74);
var lyr_Prescriptionssurfaciques1_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques1_74, 
                style: style_Prescriptionssurfaciques1_74,
                popuplayertitle: 'Prescriptions surfaciques 1',
                interactive: true,
    title: 'Prescriptions surfaciques 1<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_74_0.png" /> Emplacement réservé n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_74_1.png" /> Orientation d\'Aménagement et de programmation<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_74_2.png" /> Protection des jardins<br />\
    <img src="styles/legend/Prescriptionssurfaciques1_74_3.png" /> Protection des zones humides<br />' });
var format_Ruissellement_75 = new ol.format.GeoJSON();
var features_Ruissellement_75 = format_Ruissellement_75.readFeatures(json_Ruissellement_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruissellement_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruissellement_75.addFeatures(features_Ruissellement_75);
var lyr_Ruissellement_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruissellement_75, 
                style: style_Ruissellement_75,
                popuplayertitle: 'Ruissellement',
                interactive: true,
    title: 'Ruissellement<br />\
    <img src="styles/legend/Ruissellement_75_0.png" /> Axe de ruissellement<br />\
    <img src="styles/legend/Ruissellement_75_1.png" /> Axe de ruissellement anthropique<br />' });
var format_Prescriptionslinaires_76 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_76 = format_Prescriptionslinaires_76.readFeatures(json_Prescriptionslinaires_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_76.addFeatures(features_Prescriptionslinaires_76);
var lyr_Prescriptionslinaires_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_76, 
                style: style_Prescriptionslinaires_76,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_76_0.png" /> Création de plantations<br />\
    <img src="styles/legend/Prescriptionslinaires_76_1.png" /> Protection des haies et alignements d\'arbres<br />\
    <img src="styles/legend/Prescriptionslinaires_76_2.png" /> Protection des talus<br />\
    <img src="styles/legend/Prescriptionslinaires_76_3.png" /> Protection du linéaire commercial<br />' });
var format_Prescriptionsponctuelles_77 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_77 = format_Prescriptionsponctuelles_77.readFeatures(json_Prescriptionsponctuelles_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_77.addFeatures(features_Prescriptionsponctuelles_77);
var lyr_Prescriptionsponctuelles_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_77, 
                style: style_Prescriptionsponctuelles_77,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_77_0.png" /> Protection patrimoine<br />' });
var format_Codessecteurs_78 = new ol.format.GeoJSON();
var features_Codessecteurs_78 = format_Codessecteurs_78.readFeatures(json_Codessecteurs_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_78.addFeatures(features_Codessecteurs_78);
var lyr_Codessecteurs_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_78, 
                style: style_Codessecteurs_78,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_79 = new ol.format.GeoJSON();
var features_Secteurs_79 = format_Secteurs_79.readFeatures(json_Secteurs_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_79.addFeatures(features_Secteurs_79);
var lyr_Secteurs_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_79, 
                style: style_Secteurs_79,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_79_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_79_1.png" /> SU<br />' });
var format_Codessecteurs_80 = new ol.format.GeoJSON();
var features_Codessecteurs_80 = format_Codessecteurs_80.readFeatures(json_Codessecteurs_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_80.addFeatures(features_Codessecteurs_80);
var lyr_Codessecteurs_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_80, 
                style: style_Codessecteurs_80,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_81 = new ol.format.GeoJSON();
var features_Secteurs_81 = format_Secteurs_81.readFeatures(json_Secteurs_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_81.addFeatures(features_Secteurs_81);
var lyr_Secteurs_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_81, 
                style: style_Secteurs_81,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_81_0.png" /> 1AU<br />\
    <img src="styles/legend/Secteurs_81_1.png" /> 1AUe<br />\
    <img src="styles/legend/Secteurs_81_2.png" /> A<br />\
    <img src="styles/legend/Secteurs_81_3.png" /> N<br />\
    <img src="styles/legend/Secteurs_81_4.png" /> Nj<br />\
    <img src="styles/legend/Secteurs_81_5.png" /> Ny<br />\
    <img src="styles/legend/Secteurs_81_6.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_81_7.png" /> Ub<br />\
    <img src="styles/legend/Secteurs_81_8.png" /> Ue<br />\
    <img src="styles/legend/Secteurs_81_9.png" /> Uh<br />\
    <img src="styles/legend/Secteurs_81_10.png" /> Uyc<br />\
    <img src="styles/legend/Secteurs_81_11.png" /> Uyi<br />' });
var format_Prescriptionssurfaciques_82 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_82 = format_Prescriptionssurfaciques_82.readFeatures(json_Prescriptionssurfaciques_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_82.addFeatures(features_Prescriptionssurfaciques_82);
var lyr_Prescriptionssurfaciques_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_82, 
                style: style_Prescriptionssurfaciques_82,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_82_0.png" /> Emplacement réservé n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_82_1.png" /> Emplacement réservé n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_82_2.png" /> Orientation d\'Aménagement et de Programmation<br />\
    <img src="styles/legend/Prescriptionssurfaciques_82_3.png" /> Protection des Espaces boisées Classés<br />\
    <img src="styles/legend/Prescriptionssurfaciques_82_4.png" /> Protection des zones humides<br />\
    <img src="styles/legend/Prescriptionssurfaciques_82_5.png" /> Protection du patrimoine<br />' });
var format_Prescriptionslinaires_83 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_83 = format_Prescriptionslinaires_83.readFeatures(json_Prescriptionslinaires_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_83.addFeatures(features_Prescriptionslinaires_83);
var lyr_Prescriptionslinaires_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_83, 
                style: style_Prescriptionslinaires_83,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_83_0.png" /> Protection des haies et alignements d\'arbres<br />' });
var format_Prescriptionsponctuelles_84 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_84 = format_Prescriptionsponctuelles_84.readFeatures(json_Prescriptionsponctuelles_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_84.addFeatures(features_Prescriptionsponctuelles_84);
var lyr_Prescriptionsponctuelles_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_84, 
                style: style_Prescriptionsponctuelles_84,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_84_0.png" /> Protection des arbres<br />\
    <img src="styles/legend/Prescriptionsponctuelles_84_1.png" /> Protection des mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_84_2.png" /> Protection patrimoine<br />' });
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
    <img src="styles/legend/Secteurs_86_0.png" /> SA<br />\
    <img src="styles/legend/Secteurs_86_1.png" /> SN<br />\
    <img src="styles/legend/Secteurs_86_2.png" /> SU<br />' });
var format_Codessecteurs_87 = new ol.format.GeoJSON();
var features_Codessecteurs_87 = format_Codessecteurs_87.readFeatures(json_Codessecteurs_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_87.addFeatures(features_Codessecteurs_87);
var lyr_Codessecteurs_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_87, 
                style: style_Codessecteurs_87,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_88 = new ol.format.GeoJSON();
var features_Secteurs_88 = format_Secteurs_88.readFeatures(json_Secteurs_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_88.addFeatures(features_Secteurs_88);
var lyr_Secteurs_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_88, 
                style: style_Secteurs_88,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_88_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_88_1.png" /> U<br />' });
var format_Espaceboisclass_89 = new ol.format.GeoJSON();
var features_Espaceboisclass_89 = format_Espaceboisclass_89.readFeatures(json_Espaceboisclass_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaceboisclass_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaceboisclass_89.addFeatures(features_Espaceboisclass_89);
var lyr_Espaceboisclass_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaceboisclass_89, 
                style: style_Espaceboisclass_89,
                popuplayertitle: 'Espace boisé classé',
                interactive: true,
                title: '<img src="styles/legend/Espaceboisclass_89.png" /> Espace boisé classé'
            });
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
    <img src="styles/legend/Secteurs_91_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_91_1.png" /> U<br />' });
var format_Bois_92 = new ol.format.GeoJSON();
var features_Bois_92 = format_Bois_92.readFeatures(json_Bois_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bois_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bois_92.addFeatures(features_Bois_92);
var lyr_Bois_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bois_92, 
                style: style_Bois_92,
                popuplayertitle: 'Bois',
                interactive: true,
                title: '<img src="styles/legend/Bois_92.png" /> Bois'
            });
var format_Codessecteurs_93 = new ol.format.GeoJSON();
var features_Codessecteurs_93 = format_Codessecteurs_93.readFeatures(json_Codessecteurs_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_93.addFeatures(features_Codessecteurs_93);
var lyr_Codessecteurs_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_93, 
                style: style_Codessecteurs_93,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_94 = new ol.format.GeoJSON();
var features_Secteurs_94 = format_Secteurs_94.readFeatures(json_Secteurs_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_94.addFeatures(features_Secteurs_94);
var lyr_Secteurs_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_94, 
                style: style_Secteurs_94,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_94_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_94_1.png" /> U<br />' });
var format_Droitdepremption_95 = new ol.format.GeoJSON();
var features_Droitdepremption_95 = format_Droitdepremption_95.readFeatures(json_Droitdepremption_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Droitdepremption_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Droitdepremption_95.addFeatures(features_Droitdepremption_95);
var lyr_Droitdepremption_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Droitdepremption_95, 
                style: style_Droitdepremption_95,
                popuplayertitle: 'Droit de préemption',
                interactive: true,
                title: '<img src="styles/legend/Droitdepremption_95.png" /> Droit de préemption'
            });
var format_Codessecteurs_96 = new ol.format.GeoJSON();
var features_Codessecteurs_96 = format_Codessecteurs_96.readFeatures(json_Codessecteurs_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_96.addFeatures(features_Codessecteurs_96);
var lyr_Codessecteurs_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_96, 
                style: style_Codessecteurs_96,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_97 = new ol.format.GeoJSON();
var features_Secteurs_97 = format_Secteurs_97.readFeatures(json_Secteurs_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_97.addFeatures(features_Secteurs_97);
var lyr_Secteurs_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_97, 
                style: style_Secteurs_97,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_97_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_97_1.png" /> U<br />' });
var format_DroitdePremption_98 = new ol.format.GeoJSON();
var features_DroitdePremption_98 = format_DroitdePremption_98.readFeatures(json_DroitdePremption_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DroitdePremption_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DroitdePremption_98.addFeatures(features_DroitdePremption_98);
var lyr_DroitdePremption_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DroitdePremption_98, 
                style: style_DroitdePremption_98,
                popuplayertitle: 'Droit de Préemption',
                interactive: true,
                title: '<img src="styles/legend/DroitdePremption_98.png" /> Droit de Préemption'
            });
var format_Codessecteurs_99 = new ol.format.GeoJSON();
var features_Codessecteurs_99 = format_Codessecteurs_99.readFeatures(json_Codessecteurs_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_99.addFeatures(features_Codessecteurs_99);
var lyr_Codessecteurs_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_99, 
                style: style_Codessecteurs_99,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_100 = new ol.format.GeoJSON();
var features_Secteurs_100 = format_Secteurs_100.readFeatures(json_Secteurs_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_100.addFeatures(features_Secteurs_100);
var lyr_Secteurs_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_100, 
                style: style_Secteurs_100,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_100_0.png" /> 1AUa<br />\
    <img src="styles/legend/Secteurs_100_1.png" /> 1AUb<br />\
    <img src="styles/legend/Secteurs_100_2.png" /> 2AU<br />\
    <img src="styles/legend/Secteurs_100_3.png" /> A<br />\
    <img src="styles/legend/Secteurs_100_4.png" /> Na<br />\
    <img src="styles/legend/Secteurs_100_5.png" /> Ua<br />' });
var format_DroitdePremptionurbain_101 = new ol.format.GeoJSON();
var features_DroitdePremptionurbain_101 = format_DroitdePremptionurbain_101.readFeatures(json_DroitdePremptionurbain_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DroitdePremptionurbain_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DroitdePremptionurbain_101.addFeatures(features_DroitdePremptionurbain_101);
var lyr_DroitdePremptionurbain_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DroitdePremptionurbain_101, 
                style: style_DroitdePremptionurbain_101,
                popuplayertitle: 'Droit de Préemption urbain',
                interactive: true,
                title: '<img src="styles/legend/DroitdePremptionurbain_101.png" /> Droit de Préemption urbain'
            });
var format_Prescriptionssurfaciques_102 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_102 = format_Prescriptionssurfaciques_102.readFeatures(json_Prescriptionssurfaciques_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_102.addFeatures(features_Prescriptionssurfaciques_102);
var lyr_Prescriptionssurfaciques_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_102, 
                style: style_Prescriptionssurfaciques_102,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_0.png" /> ER 1:construction d\'une bibliothèque<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_1.png" /> ER 2:Extension de l\'école<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_2.png" /> ER 3:Extension du cimetière<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_3.png" /> ER 4:Amgnt carrefour RD 12/VC 2-Bassin rétention-Escpave vert<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_4.png" /> ER 5:Élargissement de la voirie<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_5.png" /> Espaces boisés classés<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_6.png" /> Secteur 1AUa comprennant des orientations d\'aménagement<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_7.png" /> Secteur d\'expansion des ruissellements<br />\
    <img src="styles/legend/Prescriptionssurfaciques_102_8.png" /> Zone d\'aléas géologiques<br />' });
var format_Prescriptionsponctuelles_103 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_103 = format_Prescriptionsponctuelles_103.readFeatures(json_Prescriptionsponctuelles_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_103.addFeatures(features_Prescriptionsponctuelles_103);
var lyr_Prescriptionsponctuelles_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_103, 
                style: style_Prescriptionsponctuelles_103,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_103_0.png" /> Bâtiments agricoles d\'intérêt architectural n°1<br />\
    <img src="styles/legend/Prescriptionsponctuelles_103_1.png" /> Bâtiments agricoles d\'intérêt architectural n°2<br />\
    <img src="styles/legend/Prescriptionsponctuelles_103_2.png" /> Bétoire<br />\
    <img src="styles/legend/Prescriptionsponctuelles_103_3.png" /> Mares à conserver<br />' });
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
    <img src="styles/legend/Secteurs_105_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_105_1.png" /> SU<br />' });
var format_Codessecteurs_106 = new ol.format.GeoJSON();
var features_Codessecteurs_106 = format_Codessecteurs_106.readFeatures(json_Codessecteurs_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_106.addFeatures(features_Codessecteurs_106);
var lyr_Codessecteurs_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_106, 
                style: style_Codessecteurs_106,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_107 = new ol.format.GeoJSON();
var features_Secteurs_107 = format_Secteurs_107.readFeatures(json_Secteurs_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_107.addFeatures(features_Secteurs_107);
var lyr_Secteurs_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_107, 
                style: style_Secteurs_107,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_107_0.png" /> Zone constructible<br />\
    <img src="styles/legend/Secteurs_107_1.png" /> Zone naturelle<br />' });
var format_Secteurs_108 = new ol.format.GeoJSON();
var features_Secteurs_108 = format_Secteurs_108.readFeatures(json_Secteurs_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_108.addFeatures(features_Secteurs_108);
var lyr_Secteurs_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_108, 
                style: style_Secteurs_108,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_108_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_108_1.png" /> U<br />' });
var format_Prescriptionssurfaciques_109 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_109 = format_Prescriptionssurfaciques_109.readFeatures(json_Prescriptionssurfaciques_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_109.addFeatures(features_Prescriptionssurfaciques_109);
var lyr_Prescriptionssurfaciques_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_109, 
                style: style_Prescriptionssurfaciques_109,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_0.png" /> Corps de ferme en activité n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_1.png" /> Corps de ferme en activité n°10<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_2.png" /> Corps de ferme en activité n°11<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_3.png" /> Corps de ferme en activité n°12<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_4.png" /> Corps de ferme en activité n°13<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_5.png" /> Corps de ferme en activité n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_6.png" /> Corps de ferme en activité n°3<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_7.png" /> Corps de ferme en activité n°4<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_8.png" /> Corps de ferme en activité n°5<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_9.png" /> Corps de ferme en activité n°6<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_10.png" /> Corps de ferme en activité n°7<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_11.png" /> Corps de ferme en activité n°8<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_12.png" /> Corps de ferme en activité n°9<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_13.png" /> Couloir de présomption de nuisances sonores<br />\
    <img src="styles/legend/Prescriptionssurfaciques_109_14.png" /> Site archéologique (source:Service Régional de l\'Archéologie)<br />' });
var format_Prescriptionslinaires_110 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_110 = format_Prescriptionslinaires_110.readFeatures(json_Prescriptionslinaires_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_110.addFeatures(features_Prescriptionslinaires_110);
var lyr_Prescriptionslinaires_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_110, 
                style: style_Prescriptionslinaires_110,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_110_0.png" /> Axe de ruissellement(Talweg)<br />\
    <img src="styles/legend/Prescriptionslinaires_110_1.png" /> Haies paysagères remarquable<br />' });
var format_Prescriptionsponctuelles_111 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_111 = format_Prescriptionsponctuelles_111.readFeatures(json_Prescriptionsponctuelles_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_111.addFeatures(features_Prescriptionsponctuelles_111);
var lyr_Prescriptionsponctuelles_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_111, 
                style: style_Prescriptionsponctuelles_111,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_111_0.png" /> Mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_111_1.png" /> Monument historique classé(500 m de rayon)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_111_2.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Prescriptionsponctuelles_111_3.png" /> Sources<br />\
    <img src="styles/legend/Prescriptionsponctuelles_111_4.png" /> Zone d\'étangs<br />' });
var format_Codessecteurs_112 = new ol.format.GeoJSON();
var features_Codessecteurs_112 = format_Codessecteurs_112.readFeatures(json_Codessecteurs_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_112.addFeatures(features_Codessecteurs_112);
var lyr_Codessecteurs_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_112, 
                style: style_Codessecteurs_112,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Prescriptionssurfaciques_113 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_113 = format_Prescriptionssurfaciques_113.readFeatures(json_Prescriptionssurfaciques_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_113.addFeatures(features_Prescriptionssurfaciques_113);
var lyr_Prescriptionssurfaciques_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_113, 
                style: style_Prescriptionssurfaciques_113,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_113_0.png" /> Périmètre de protection éloigné du captage<br />' });
var format_Secteurs_114 = new ol.format.GeoJSON();
var features_Secteurs_114 = format_Secteurs_114.readFeatures(json_Secteurs_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_114.addFeatures(features_Secteurs_114);
var lyr_Secteurs_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_114, 
                style: style_Secteurs_114,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_114_0.png" /> SN<br />\
    <img src="styles/legend/Secteurs_114_1.png" /> SU<br />' });
var format_Codessecteurs_115 = new ol.format.GeoJSON();
var features_Codessecteurs_115 = format_Codessecteurs_115.readFeatures(json_Codessecteurs_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_115.addFeatures(features_Codessecteurs_115);
var lyr_Codessecteurs_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_115, 
                style: style_Codessecteurs_115,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_Secteurs_116 = new ol.format.GeoJSON();
var features_Secteurs_116 = format_Secteurs_116.readFeatures(json_Secteurs_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_116.addFeatures(features_Secteurs_116);
var lyr_Secteurs_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_116, 
                style: style_Secteurs_116,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_116_0.png" /> SA<br />\
    <img src="styles/legend/Secteurs_116_1.png" /> SN<br />\
    <img src="styles/legend/Secteurs_116_2.png" /> SU<br />' });
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
var format_Secteurs_118 = new ol.format.GeoJSON();
var features_Secteurs_118 = format_Secteurs_118.readFeatures(json_Secteurs_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_118.addFeatures(features_Secteurs_118);
var lyr_Secteurs_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_118, 
                style: style_Secteurs_118,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_118_0.png" /> N<br />\
    <img src="styles/legend/Secteurs_118_1.png" /> U<br />' });
var format_Prescriptionssurfaciques_119 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_119 = format_Prescriptionssurfaciques_119.readFeatures(json_Prescriptionssurfaciques_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_119.addFeatures(features_Prescriptionssurfaciques_119);
var lyr_Prescriptionssurfaciques_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_119, 
                style: style_Prescriptionssurfaciques_119,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_0.png" /> Corps de ferme en activité-n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_1.png" /> Corps de ferme en activité-n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_2.png" /> Corps de ferme en activité-n°3<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_3.png" /> Corps de ferme en activité-n°4<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_4.png" /> Corps de ferme en activité-n°5<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_5.png" /> Corps de ferme en activité-n°6<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_6.png" /> Corps de ferme en activité-n°7<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_7.png" /> Corps de ferme en activité-n°8<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_8.png" /> Corps de ferme en activité-n°9<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_9.png" /> Corps de ferme en activité-n°10<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_10.png" /> Droit de Préemption Urbain<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_11.png" /> Périmètre de protection éloigné<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_12.png" /> Périmètre de protection rapproché<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_13.png" /> Sites archéologique à localisation approximative n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_119_14.png" /> Sites archéologique à localisation approximative n°4<br />' });
var format_Prescriptionslinaires_120 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_120 = format_Prescriptionslinaires_120.readFeatures(json_Prescriptionslinaires_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_120.addFeatures(features_Prescriptionslinaires_120);
var lyr_Prescriptionslinaires_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_120, 
                style: style_Prescriptionslinaires_120,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_120_0.png" /> Axes de ruissellements<br />\
    <img src="styles/legend/Prescriptionslinaires_120_1.png" /> Axes de ruissellements concentrés, sans zone d\'expansion<br />' });
var format_Prescriptionsponctuelles_121 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_121 = format_Prescriptionsponctuelles_121.readFeatures(json_Prescriptionsponctuelles_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_121.addFeatures(features_Prescriptionsponctuelles_121);
var lyr_Prescriptionsponctuelles_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_121, 
                style: style_Prescriptionsponctuelles_121,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_0.png" /> Anciennes mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_1.png" /> Carrière à ciel ouvert n°10<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_2.png" /> Carrière à ciel ouvert n°7<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_3.png" /> Carrière à ciel ouvert n°8<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_4.png" /> Carrière remblayée n°9<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_5.png" /> Mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_6.png" /> Réservoirs, puits, lavoirs<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_7.png" /> Réservoirs, puits, lavoirs(Syndicat d\'eau)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_8.png" /> Source<br />\
    <img src="styles/legend/Prescriptionsponctuelles_121_9.png" /> Vue paysagère à préserver<br />' });
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
var format_Corpsdeferme_123 = new ol.format.GeoJSON();
var features_Corpsdeferme_123 = format_Corpsdeferme_123.readFeatures(json_Corpsdeferme_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corpsdeferme_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corpsdeferme_123.addFeatures(features_Corpsdeferme_123);
var lyr_Corpsdeferme_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corpsdeferme_123, 
                style: style_Corpsdeferme_123,
                popuplayertitle: 'Corps de ferme',
                interactive: true,
                title: '<img src="styles/legend/Corpsdeferme_123.png" /> Corps de ferme'
            });
var format_Distancedereculautourdubti_124 = new ol.format.GeoJSON();
var features_Distancedereculautourdubti_124 = format_Distancedereculautourdubti_124.readFeatures(json_Distancedereculautourdubti_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distancedereculautourdubti_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distancedereculautourdubti_124.addFeatures(features_Distancedereculautourdubti_124);
var lyr_Distancedereculautourdubti_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distancedereculautourdubti_124, 
                style: style_Distancedereculautourdubti_124,
                popuplayertitle: 'Distance de recul autour du bâti',
                interactive: true,
                title: '<img src="styles/legend/Distancedereculautourdubti_124.png" /> Distance de recul autour du bâti'
            });
var format_Btiagricole_125 = new ol.format.GeoJSON();
var features_Btiagricole_125 = format_Btiagricole_125.readFeatures(json_Btiagricole_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiagricole_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiagricole_125.addFeatures(features_Btiagricole_125);
var lyr_Btiagricole_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btiagricole_125, 
                style: style_Btiagricole_125,
                popuplayertitle: 'Bâti agricole',
                interactive: true,
                title: '<img src="styles/legend/Btiagricole_125.png" /> Bâti agricole'
            });
var format_Primtredeprotectionincendie100m_126 = new ol.format.GeoJSON();
var features_Primtredeprotectionincendie100m_126 = format_Primtredeprotectionincendie100m_126.readFeatures(json_Primtredeprotectionincendie100m_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtredeprotectionincendie100m_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtredeprotectionincendie100m_126.addFeatures(features_Primtredeprotectionincendie100m_126);
var lyr_Primtredeprotectionincendie100m_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtredeprotectionincendie100m_126, 
                style: style_Primtredeprotectionincendie100m_126,
                popuplayertitle: 'Périmètre de protection incendie (100 m)',
                interactive: true,
                title: '<img src="styles/legend/Primtredeprotectionincendie100m_126.png" /> Périmètre de protection incendie (100 m)'
            });
var format_Primtredeprotectionincendie15m_127 = new ol.format.GeoJSON();
var features_Primtredeprotectionincendie15m_127 = format_Primtredeprotectionincendie15m_127.readFeatures(json_Primtredeprotectionincendie15m_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtredeprotectionincendie15m_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtredeprotectionincendie15m_127.addFeatures(features_Primtredeprotectionincendie15m_127);
var lyr_Primtredeprotectionincendie15m_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtredeprotectionincendie15m_127, 
                style: style_Primtredeprotectionincendie15m_127,
                popuplayertitle: 'Périmètre de protection incendie (15 m)',
                interactive: true,
                title: '<img src="styles/legend/Primtredeprotectionincendie15m_127.png" /> Périmètre de protection incendie (15 m)'
            });
var format_lotsanonymesPAC_128 = new ol.format.GeoJSON();
var features_lotsanonymesPAC_128 = format_lotsanonymesPAC_128.readFeatures(json_lotsanonymesPAC_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotsanonymesPAC_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotsanonymesPAC_128.addFeatures(features_lotsanonymesPAC_128);
var lyr_lotsanonymesPAC_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotsanonymesPAC_128, 
                style: style_lotsanonymesPAC_128,
                popuplayertitle: 'Îlots anonymes PAC',
                interactive: true,
                title: '<img src="styles/legend/lotsanonymesPAC_128.png" /> Îlots anonymes PAC'
            });
var format_Corpsdeferme_129 = new ol.format.GeoJSON();
var features_Corpsdeferme_129 = format_Corpsdeferme_129.readFeatures(json_Corpsdeferme_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corpsdeferme_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corpsdeferme_129.addFeatures(features_Corpsdeferme_129);
var lyr_Corpsdeferme_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corpsdeferme_129, 
                style: style_Corpsdeferme_129,
                popuplayertitle: 'Corps de ferme',
                interactive: true,
                title: '<img src="styles/legend/Corpsdeferme_129.png" /> Corps de ferme'
            });
var format_Distancedereculautourdubti_130 = new ol.format.GeoJSON();
var features_Distancedereculautourdubti_130 = format_Distancedereculautourdubti_130.readFeatures(json_Distancedereculautourdubti_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distancedereculautourdubti_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distancedereculautourdubti_130.addFeatures(features_Distancedereculautourdubti_130);
var lyr_Distancedereculautourdubti_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distancedereculautourdubti_130, 
                style: style_Distancedereculautourdubti_130,
                popuplayertitle: 'Distance de recul autour du bâti',
                interactive: true,
                title: '<img src="styles/legend/Distancedereculautourdubti_130.png" /> Distance de recul autour du bâti'
            });
var format_Btiagricole_131 = new ol.format.GeoJSON();
var features_Btiagricole_131 = format_Btiagricole_131.readFeatures(json_Btiagricole_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiagricole_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiagricole_131.addFeatures(features_Btiagricole_131);
var lyr_Btiagricole_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Btiagricole_131, 
                style: style_Btiagricole_131,
                popuplayertitle: 'Bâti agricole',
                interactive: true,
                title: '<img src="styles/legend/Btiagricole_131.png" /> Bâti agricole'
            });
var format_Zonedactivitetdeservice_132 = new ol.format.GeoJSON();
var features_Zonedactivitetdeservice_132 = format_Zonedactivitetdeservice_132.readFeatures(json_Zonedactivitetdeservice_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedactivitetdeservice_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedactivitetdeservice_132.addFeatures(features_Zonedactivitetdeservice_132);
var lyr_Zonedactivitetdeservice_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedactivitetdeservice_132, 
                style: style_Zonedactivitetdeservice_132,
                popuplayertitle: 'Zone d\'activité et de service',
                interactive: true,
                title: '<img src="styles/legend/Zonedactivitetdeservice_132.png" /> Zone d\'activité et de service'
            });
var format_ERP_133 = new ol.format.GeoJSON();
var features_ERP_133 = format_ERP_133.readFeatures(json_ERP_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERP_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERP_133.addFeatures(features_ERP_133);
var lyr_ERP_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ERP_133, 
                style: style_ERP_133,
                popuplayertitle: 'ERP',
                interactive: true,
    title: 'ERP<br />\
    <img src="styles/legend/ERP_133_0.png" /> ADMINISTRATION PRIVEE<br />\
    <img src="styles/legend/ERP_133_1.png" /> ADMINISTRATIONS, BANQUES, BUREAUX<br />\
    <img src="styles/legend/ERP_133_2.png" /> AUTRE ENSEIGNEMENT PRIVE<br />\
    <img src="styles/legend/ERP_133_3.png" /> AUTRE ENSEIGNEMENT PRIVE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_133_4.png" /> AUTRE ENSEIGNEMENT PUBLIC<br />\
    <img src="styles/legend/ERP_133_5.png" /> BRICOLAGE<br />\
    <img src="styles/legend/ERP_133_6.png" /> CABINET MEDICAL, CABINET DENTAIRE<br />\
    <img src="styles/legend/ERP_133_7.png" /> CASINO<br />\
    <img src="styles/legend/ERP_133_8.png" /> CENTRE AERE, CENTRE DE LOISIRS (AVEC SOMMEI<br />\
    <img src="styles/legend/ERP_133_9.png" /> CENTRE COMMERCIAL<br />\
    <img src="styles/legend/ERP_133_10.png" /> CENTRE EQUESTRE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_133_11.png" /> CENTRE SOCIAL CULTUREL<br />\
    <img src="styles/legend/ERP_133_12.png" /> CINEMA<br />\
    <img src="styles/legend/ERP_133_13.png" /> COLLEGE PRIVE<br />\
    <img src="styles/legend/ERP_133_14.png" /> COLLEGE PUBLIC<br />\
    <img src="styles/legend/ERP_133_15.png" /> COLONIE DE VACANCES (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_133_16.png" /> CRECHE<br />\
    <img src="styles/legend/ERP_133_17.png" /> DISCOTHEQUE<br />\
    <img src="styles/legend/ERP_133_18.png" /> ECOLE MATERNELLE PUBLIQUE<br />\
    <img src="styles/legend/ERP_133_19.png" /> ECOLE PRIMAIRE PUBLIQUE<br />\
    <img src="styles/legend/ERP_133_20.png" /> EHPAD<br />\
    <img src="styles/legend/ERP_133_21.png" /> ETABLISSEMENT CULTUEL<br />\
    <img src="styles/legend/ERP_133_22.png" /> ETABLISSEMENTS SPORTIFS COUVERTS<br />\
    <img src="styles/legend/ERP_133_23.png" /> EXPOSITION PERMANENTE<br />\
    <img src="styles/legend/ERP_133_24.png" /> EXPOSITION TEMPORAIRE<br />\
    <img src="styles/legend/ERP_133_25.png" /> FOYER DE L\'ENFANCE<br />\
    <img src="styles/legend/ERP_133_26.png" /> FOYER DE L\'ENFANCE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_133_27.png" /> GROUPE SCOLAIRE PRIVE<br />\
    <img src="styles/legend/ERP_133_28.png" /> GROUPE SCOLAIRE PUBLIC<br />\
    <img src="styles/legend/ERP_133_29.png" /> HEBERGEMENT POUR PERSONNES HANDICAPEES<br />\
    <img src="styles/legend/ERP_133_30.png" /> HIPPODROME<br />\
    <img src="styles/legend/ERP_133_31.png" /> JARDINAGE<br />\
    <img src="styles/legend/ERP_133_32.png" /> LYCEE PRIVE<br />\
    <img src="styles/legend/ERP_133_33.png" /> LYCEE PRIVE (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_133_34.png" /> LYCEE PUBLIC<br />\
    <img src="styles/legend/ERP_133_35.png" /> LYCEE PUBLIC (AVEC SOMMEIL)<br />\
    <img src="styles/legend/ERP_133_36.png" /> MAGASIN DE VENTE<br />\
    <img src="styles/legend/ERP_133_37.png" /> MAISON DE RETRAITE MEDICALISEE (AVEC SOMMEI<br />\
    <img src="styles/legend/ERP_133_38.png" /> PARC DE STATIONNEMENT<br />\
    <img src="styles/legend/ERP_133_39.png" /> PISCINE COUVERTE<br />\
    <img src="styles/legend/ERP_133_40.png" /> PRESTATAIRE DE SERVICE<br />\
    <img src="styles/legend/ERP_133_41.png" /> RESTAURANT<br />\
    <img src="styles/legend/ERP_133_42.png" /> RESTAURANT ET DEBITS DE BOISSONS<br />\
    <img src="styles/legend/ERP_133_43.png" /> RESTAURANT LYCEE<br />\
    <img src="styles/legend/ERP_133_44.png" /> SALLE DE JEUX<br />\
    <img src="styles/legend/ERP_133_45.png" /> SALLE DE REUNIONS<br />\
    <img src="styles/legend/ERP_133_46.png" /> SALLE DE SPECTACLES<br />\
    <img src="styles/legend/ERP_133_47.png" /> SALLE DE SPORT SPECIALISEE<br />\
    <img src="styles/legend/ERP_133_48.png" /> SALLE OMNISPORTS<br />\
    <img src="styles/legend/ERP_133_49.png" /> SALLE OMNISPORTS COLLEGE<br />\
    <img src="styles/legend/ERP_133_50.png" /> SALLE OMNISPORTS LYCEE<br />\
    <img src="styles/legend/ERP_133_51.png" /> SALLE POLYVALENTE<br />\
    <img src="styles/legend/ERP_133_52.png" /> SALLES D\'AUDITION, DE CONFERENCES, DE REUNI<br />' });
var format_PPE_134 = new ol.format.GeoJSON();
var features_PPE_134 = format_PPE_134.readFeatures(json_PPE_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPE_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPE_134.addFeatures(features_PPE_134);
var lyr_PPE_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPE_134, 
                style: style_PPE_134,
                popuplayertitle: 'PPE',
                interactive: true,
                title: '<img src="styles/legend/PPE_134.png" /> PPE'
            });
var format_PPI_135 = new ol.format.GeoJSON();
var features_PPI_135 = format_PPI_135.readFeatures(json_PPI_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPI_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPI_135.addFeatures(features_PPI_135);
var lyr_PPI_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPI_135, 
                style: style_PPI_135,
                popuplayertitle: 'PPI',
                interactive: true,
                title: '<img src="styles/legend/PPI_135.png" /> PPI'
            });
var format_PPR_136 = new ol.format.GeoJSON();
var features_PPR_136 = format_PPR_136.readFeatures(json_PPR_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPR_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPR_136.addFeatures(features_PPR_136);
var lyr_PPR_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPR_136, 
                style: style_PPR_136,
                popuplayertitle: 'PPR',
                interactive: true,
                title: '<img src="styles/legend/PPR_136.png" /> PPR'
            });
var format_Fortspubliques_137 = new ol.format.GeoJSON();
var features_Fortspubliques_137 = format_Fortspubliques_137.readFeatures(json_Fortspubliques_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fortspubliques_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fortspubliques_137.addFeatures(features_Fortspubliques_137);
var lyr_Fortspubliques_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fortspubliques_137, 
                style: style_Fortspubliques_137,
                popuplayertitle: 'Forêts publiques',
                interactive: true,
                title: '<img src="styles/legend/Fortspubliques_137.png" /> Forêts publiques'
            });
var format_Haies_138 = new ol.format.GeoJSON();
var features_Haies_138 = format_Haies_138.readFeatures(json_Haies_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Haies_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haies_138.addFeatures(features_Haies_138);
var lyr_Haies_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haies_138,
maxResolution:7.00111653806549,
 
                style: style_Haies_138,
                popuplayertitle: 'Haies',
                interactive: true,
                title: '<img src="styles/legend/Haies_138.png" /> Haies'
            });
var format_Trononshydrographiques_139 = new ol.format.GeoJSON();
var features_Trononshydrographiques_139 = format_Trononshydrographiques_139.readFeatures(json_Trononshydrographiques_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trononshydrographiques_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trononshydrographiques_139.addFeatures(features_Trononshydrographiques_139);
var lyr_Trononshydrographiques_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trononshydrographiques_139,
maxResolution:7.00111653806549,
 
                style: style_Trononshydrographiques_139,
                popuplayertitle: 'Tronçons hydrographiques',
                interactive: true,
                title: '<img src="styles/legend/Trononshydrographiques_139.png" /> Tronçons hydrographiques'
            });
var format_Surfaceshydrographiques_140 = new ol.format.GeoJSON();
var features_Surfaceshydrographiques_140 = format_Surfaceshydrographiques_140.readFeatures(json_Surfaceshydrographiques_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surfaceshydrographiques_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surfaceshydrographiques_140.addFeatures(features_Surfaceshydrographiques_140);
var lyr_Surfaceshydrographiques_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surfaceshydrographiques_140,
maxResolution:7.00111653806549,
 
                style: style_Surfaceshydrographiques_140,
                popuplayertitle: 'Surfaces hydrographiques',
                interactive: true,
                title: '<img src="styles/legend/Surfaceshydrographiques_140.png" /> Surfaces hydrographiques'
            });
var format_Dtailshydrographiques_141 = new ol.format.GeoJSON();
var features_Dtailshydrographiques_141 = format_Dtailshydrographiques_141.readFeatures(json_Dtailshydrographiques_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dtailshydrographiques_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dtailshydrographiques_141.addFeatures(features_Dtailshydrographiques_141);
var lyr_Dtailshydrographiques_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dtailshydrographiques_141,
maxResolution:7.00111653806549,
 
                style: style_Dtailshydrographiques_141,
                popuplayertitle: 'Détails hydrographiques',
                interactive: true,
    title: 'Détails hydrographiques<br />\
    <img src="styles/legend/Dtailshydrographiques_141_0.png" /> Citerne<br />\
    <img src="styles/legend/Dtailshydrographiques_141_1.png" /> Point d\'eau<br />\
    <img src="styles/legend/Dtailshydrographiques_141_2.png" /> Résurgence<br />\
    <img src="styles/legend/Dtailshydrographiques_141_3.png" /> Source<br />\
    <img src="styles/legend/Dtailshydrographiques_141_4.png" /> Source captée<br />' });
var format_MaresPRAM_142 = new ol.format.GeoJSON();
var features_MaresPRAM_142 = format_MaresPRAM_142.readFeatures(json_MaresPRAM_142, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaresPRAM_142 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaresPRAM_142.addFeatures(features_MaresPRAM_142);
var lyr_MaresPRAM_142 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaresPRAM_142,
maxResolution:7.00111653806549,
 
                style: style_MaresPRAM_142,
                popuplayertitle: 'Mares PRAM',
                interactive: true,
                title: '<img src="styles/legend/MaresPRAM_142.png" /> Mares PRAM'
            });
var format_Bassinversanttopographique_143 = new ol.format.GeoJSON();
var features_Bassinversanttopographique_143 = format_Bassinversanttopographique_143.readFeatures(json_Bassinversanttopographique_143, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bassinversanttopographique_143 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bassinversanttopographique_143.addFeatures(features_Bassinversanttopographique_143);
var lyr_Bassinversanttopographique_143 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bassinversanttopographique_143, 
                style: style_Bassinversanttopographique_143,
                popuplayertitle: 'Bassin versant topographique',
                interactive: true,
                title: '<img src="styles/legend/Bassinversanttopographique_143.png" /> Bassin versant topographique'
            });
var format_Toponymiehydrographie_144 = new ol.format.GeoJSON();
var features_Toponymiehydrographie_144 = format_Toponymiehydrographie_144.readFeatures(json_Toponymiehydrographie_144, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toponymiehydrographie_144 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toponymiehydrographie_144.addFeatures(features_Toponymiehydrographie_144);
var lyr_Toponymiehydrographie_144 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toponymiehydrographie_144,
maxResolution:7.00111653806549,
 
                style: style_Toponymiehydrographie_144,
                popuplayertitle: 'Toponymie hydrographie',
                interactive: true,
                title: '<img src="styles/legend/Toponymiehydrographie_144.png" /> Toponymie hydrographie'
            });
var format_ZPPAGournayenBrayZone2_145 = new ol.format.GeoJSON();
var features_ZPPAGournayenBrayZone2_145 = format_ZPPAGournayenBrayZone2_145.readFeatures(json_ZPPAGournayenBrayZone2_145, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAGournayenBrayZone2_145 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAGournayenBrayZone2_145.addFeatures(features_ZPPAGournayenBrayZone2_145);
var lyr_ZPPAGournayenBrayZone2_145 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAGournayenBrayZone2_145, 
                style: style_ZPPAGournayenBrayZone2_145,
                popuplayertitle: 'ZPPA Gournay-en-Bray - Zone 2',
                interactive: true,
                title: '<img src="styles/legend/ZPPAGournayenBrayZone2_145.png" /> ZPPA Gournay-en-Bray - Zone 2'
            });
var format_ZPPAGournayenBrayZone1_146 = new ol.format.GeoJSON();
var features_ZPPAGournayenBrayZone1_146 = format_ZPPAGournayenBrayZone1_146.readFeatures(json_ZPPAGournayenBrayZone1_146, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAGournayenBrayZone1_146 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAGournayenBrayZone1_146.addFeatures(features_ZPPAGournayenBrayZone1_146);
var lyr_ZPPAGournayenBrayZone1_146 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAGournayenBrayZone1_146, 
                style: style_ZPPAGournayenBrayZone1_146,
                popuplayertitle: 'ZPPA Gournay-en-Bray - Zone 1',
                interactive: true,
                title: '<img src="styles/legend/ZPPAGournayenBrayZone1_146.png" /> ZPPA Gournay-en-Bray - Zone 1'
            });
var format_Sitesauxabords_147 = new ol.format.GeoJSON();
var features_Sitesauxabords_147 = format_Sitesauxabords_147.readFeatures(json_Sitesauxabords_147, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesauxabords_147 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesauxabords_147.addFeatures(features_Sitesauxabords_147);
var lyr_Sitesauxabords_147 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesauxabords_147, 
                style: style_Sitesauxabords_147,
                popuplayertitle: 'Sites aux abords',
                interactive: true,
                title: '<img src="styles/legend/Sitesauxabords_147.png" /> Sites aux abords'
            });
var format_SUPMH_148 = new ol.format.GeoJSON();
var features_SUPMH_148 = format_SUPMH_148.readFeatures(json_SUPMH_148, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUPMH_148 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUPMH_148.addFeatures(features_SUPMH_148);
var lyr_SUPMH_148 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUPMH_148, 
                style: style_SUPMH_148,
                popuplayertitle: 'SUPMH',
                interactive: true,
                title: '<img src="styles/legend/SUPMH_148.png" /> SUPMH'
            });
var format_SPR_149 = new ol.format.GeoJSON();
var features_SPR_149 = format_SPR_149.readFeatures(json_SPR_149, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPR_149 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPR_149.addFeatures(features_SPR_149);
var lyr_SPR_149 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPR_149, 
                style: style_SPR_149,
                popuplayertitle: 'SPR',
                interactive: true,
                title: '<img src="styles/legend/SPR_149.png" /> SPR'
            });
var format_Sitesclasss_150 = new ol.format.GeoJSON();
var features_Sitesclasss_150 = format_Sitesclasss_150.readFeatures(json_Sitesclasss_150, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesclasss_150 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesclasss_150.addFeatures(features_Sitesclasss_150);
var lyr_Sitesclasss_150 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesclasss_150, 
                style: style_Sitesclasss_150,
                popuplayertitle: 'Sites classés',
                interactive: true,
                title: '<img src="styles/legend/Sitesclasss_150.png" /> Sites classés'
            });
var format_Sitesinscrits_151 = new ol.format.GeoJSON();
var features_Sitesinscrits_151 = format_Sitesinscrits_151.readFeatures(json_Sitesinscrits_151, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesinscrits_151 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesinscrits_151.addFeatures(features_Sitesinscrits_151);
var lyr_Sitesinscrits_151 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesinscrits_151, 
                style: style_Sitesinscrits_151,
                popuplayertitle: 'Sites inscrits',
                interactive: true,
                title: '<img src="styles/legend/Sitesinscrits_151.png" /> Sites inscrits'
            });
var format_Immeubles_152 = new ol.format.GeoJSON();
var features_Immeubles_152 = format_Immeubles_152.readFeatures(json_Immeubles_152, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Immeubles_152 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Immeubles_152.addFeatures(features_Immeubles_152);
var lyr_Immeubles_152 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Immeubles_152, 
                style: style_Immeubles_152,
                popuplayertitle: 'Immeubles',
                interactive: true,
    title: 'Immeubles<br />\
    <img src="styles/legend/Immeubles_152_0.png" /> Classé<br />\
    <img src="styles/legend/Immeubles_152_1.png" /> Inscrit<br />\
    <img src="styles/legend/Immeubles_152_2.png" /> Non protégé<br />\
    <img src="styles/legend/Immeubles_152_3.png" /> Partiellement Classé<br />\
    <img src="styles/legend/Immeubles_152_4.png" /> Partiellement Classé-Inscrit<br />\
    <img src="styles/legend/Immeubles_152_5.png" /> Partiellement inscrit<br />' });
var format_ZPPAindiffrencies_153 = new ol.format.GeoJSON();
var features_ZPPAindiffrencies_153 = format_ZPPAindiffrencies_153.readFeatures(json_ZPPAindiffrencies_153, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAindiffrencies_153 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAindiffrencies_153.addFeatures(features_ZPPAindiffrencies_153);
var lyr_ZPPAindiffrencies_153 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAindiffrencies_153, 
                style: style_ZPPAindiffrencies_153,
                popuplayertitle: 'ZPPA - indifférenciées',
                interactive: true,
                title: '<img src="styles/legend/ZPPAindiffrencies_153.png" /> ZPPA - indifférenciées'
            });
var format_ZPPAindiffrenciescentrodes_154 = new ol.format.GeoJSON();
var features_ZPPAindiffrenciescentrodes_154 = format_ZPPAindiffrenciescentrodes_154.readFeatures(json_ZPPAindiffrenciescentrodes_154, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPPAindiffrenciescentrodes_154 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPPAindiffrenciescentrodes_154.addFeatures(features_ZPPAindiffrenciescentrodes_154);
var lyr_ZPPAindiffrenciescentrodes_154 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPPAindiffrenciescentrodes_154, 
                style: style_ZPPAindiffrenciescentrodes_154,
                popuplayertitle: 'ZPPA - indifférenciées (centroïdes)',
                interactive: true,
                title: '<img src="styles/legend/ZPPAindiffrenciescentrodes_154.png" /> ZPPA - indifférenciées (centroïdes)'
            });
var format_RoutesconcdesTypeC_155 = new ol.format.GeoJSON();
var features_RoutesconcdesTypeC_155 = format_RoutesconcdesTypeC_155.readFeatures(json_RoutesconcdesTypeC_155, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesconcdesTypeC_155 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesconcdesTypeC_155.addFeatures(features_RoutesconcdesTypeC_155);
var lyr_RoutesconcdesTypeC_155 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesconcdesTypeC_155, 
                style: style_RoutesconcdesTypeC_155,
                popuplayertitle: 'Routes concédées - Type C',
                interactive: true,
    title: 'Routes concédées - Type C<br />\
    <img src="styles/legend/RoutesconcdesTypeC_155_0.png" /> Dépasssement du seuil réglementaire LDEN = 68 dB(A)<br />' });
var format_RoutesconcdesTypeA_156 = new ol.format.GeoJSON();
var features_RoutesconcdesTypeA_156 = format_RoutesconcdesTypeA_156.readFeatures(json_RoutesconcdesTypeA_156, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesconcdesTypeA_156 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesconcdesTypeA_156.addFeatures(features_RoutesconcdesTypeA_156);
var lyr_RoutesconcdesTypeA_156 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesconcdesTypeA_156, 
                style: style_RoutesconcdesTypeA_156,
                popuplayertitle: 'Routes concédées - Type A',
                interactive: true,
    title: 'Routes concédées - Type A<br />\
    <img src="styles/legend/RoutesconcdesTypeA_156_0.png" /> 55 à 60 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_156_1.png" /> 60 à 65 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_156_2.png" /> 65 à 70 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_156_3.png" /> 70 à 75 dB(A)<br />\
    <img src="styles/legend/RoutesconcdesTypeA_156_4.png" /> > 75  dB(A)<br />' });
var format_RoutesTypeC_157 = new ol.format.GeoJSON();
var features_RoutesTypeC_157 = format_RoutesTypeC_157.readFeatures(json_RoutesTypeC_157, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesTypeC_157 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesTypeC_157.addFeatures(features_RoutesTypeC_157);
var lyr_RoutesTypeC_157 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesTypeC_157, 
                style: style_RoutesTypeC_157,
                popuplayertitle: 'Routes - Type C',
                interactive: true,
    title: 'Routes - Type C<br />\
    <img src="styles/legend/RoutesTypeC_157_0.png" /> >68<br />\
    <img src="styles/legend/RoutesTypeC_157_1.png" /> >73<br />' });
var format_RoutesTypeA_158 = new ol.format.GeoJSON();
var features_RoutesTypeA_158 = format_RoutesTypeA_158.readFeatures(json_RoutesTypeA_158, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesTypeA_158 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesTypeA_158.addFeatures(features_RoutesTypeA_158);
var lyr_RoutesTypeA_158 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesTypeA_158, 
                style: style_RoutesTypeA_158,
                popuplayertitle: 'Routes - Type A',
                interactive: true,
    title: 'Routes - Type A<br />\
    <img src="styles/legend/RoutesTypeA_158_0.png" /> 55-60<br />\
    <img src="styles/legend/RoutesTypeA_158_1.png" /> 60-65<br />\
    <img src="styles/legend/RoutesTypeA_158_2.png" /> 65-70<br />\
    <img src="styles/legend/RoutesTypeA_158_3.png" /> 70-75<br />\
    <img src="styles/legend/RoutesTypeA_158_4.png" /> >75<br />' });
var format_Canalisationshydrocarbures_159 = new ol.format.GeoJSON();
var features_Canalisationshydrocarbures_159 = format_Canalisationshydrocarbures_159.readFeatures(json_Canalisationshydrocarbures_159, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canalisationshydrocarbures_159 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canalisationshydrocarbures_159.addFeatures(features_Canalisationshydrocarbures_159);
var lyr_Canalisationshydrocarbures_159 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canalisationshydrocarbures_159, 
                style: style_Canalisationshydrocarbures_159,
                popuplayertitle: 'Canalisations hydrocarbures',
                interactive: true,
                title: '<img src="styles/legend/Canalisationshydrocarbures_159.png" /> Canalisations hydrocarbures'
            });
var format_CanalisationsgazGRT_160 = new ol.format.GeoJSON();
var features_CanalisationsgazGRT_160 = format_CanalisationsgazGRT_160.readFeatures(json_CanalisationsgazGRT_160, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanalisationsgazGRT_160 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalisationsgazGRT_160.addFeatures(features_CanalisationsgazGRT_160);
var lyr_CanalisationsgazGRT_160 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalisationsgazGRT_160, 
                style: style_CanalisationsgazGRT_160,
                popuplayertitle: 'Canalisations gaz GRT',
                interactive: true,
                title: '<img src="styles/legend/CanalisationsgazGRT_160.png" /> Canalisations gaz GRT'
            });
var format_CanalisationsgazGRDF_161 = new ol.format.GeoJSON();
var features_CanalisationsgazGRDF_161 = format_CanalisationsgazGRDF_161.readFeatures(json_CanalisationsgazGRDF_161, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanalisationsgazGRDF_161 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanalisationsgazGRDF_161.addFeatures(features_CanalisationsgazGRDF_161);
var lyr_CanalisationsgazGRDF_161 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanalisationsgazGRDF_161, 
                style: style_CanalisationsgazGRDF_161,
                popuplayertitle: 'Canalisations gaz GRDF',
                interactive: true,
                title: '<img src="styles/legend/CanalisationsgazGRDF_161.png" /> Canalisations gaz GRDF'
            });
var format_LignesbassetensionsouterrainesENEDIS_162 = new ol.format.GeoJSON();
var features_LignesbassetensionsouterrainesENEDIS_162 = format_LignesbassetensionsouterrainesENEDIS_162.readFeatures(json_LignesbassetensionsouterrainesENEDIS_162, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LignesbassetensionsouterrainesENEDIS_162 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LignesbassetensionsouterrainesENEDIS_162.addFeatures(features_LignesbassetensionsouterrainesENEDIS_162);
var lyr_LignesbassetensionsouterrainesENEDIS_162 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LignesbassetensionsouterrainesENEDIS_162, 
                style: style_LignesbassetensionsouterrainesENEDIS_162,
                popuplayertitle: 'Lignes basse tension souterraines ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LignesbassetensionsouterrainesENEDIS_162.png" /> Lignes basse tension souterraines ENEDIS'
            });
var format_LignesbassetensionariennesENEDIS_163 = new ol.format.GeoJSON();
var features_LignesbassetensionariennesENEDIS_163 = format_LignesbassetensionariennesENEDIS_163.readFeatures(json_LignesbassetensionariennesENEDIS_163, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LignesbassetensionariennesENEDIS_163 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LignesbassetensionariennesENEDIS_163.addFeatures(features_LignesbassetensionariennesENEDIS_163);
var lyr_LignesbassetensionariennesENEDIS_163 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LignesbassetensionariennesENEDIS_163, 
                style: style_LignesbassetensionariennesENEDIS_163,
                popuplayertitle: 'Lignes basse tension aériennes ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LignesbassetensionariennesENEDIS_163.png" /> Lignes basse tension aériennes ENEDIS'
            });
var format_LigneshautetensionsouterrainesENEDIS_164 = new ol.format.GeoJSON();
var features_LigneshautetensionsouterrainesENEDIS_164 = format_LigneshautetensionsouterrainesENEDIS_164.readFeatures(json_LigneshautetensionsouterrainesENEDIS_164, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneshautetensionsouterrainesENEDIS_164 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneshautetensionsouterrainesENEDIS_164.addFeatures(features_LigneshautetensionsouterrainesENEDIS_164);
var lyr_LigneshautetensionsouterrainesENEDIS_164 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneshautetensionsouterrainesENEDIS_164, 
                style: style_LigneshautetensionsouterrainesENEDIS_164,
                popuplayertitle: 'Lignes haute tension souterraines ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LigneshautetensionsouterrainesENEDIS_164.png" /> Lignes haute tension souterraines ENEDIS'
            });
var format_LigneshautetensionariennesENEDIS_165 = new ol.format.GeoJSON();
var features_LigneshautetensionariennesENEDIS_165 = format_LigneshautetensionariennesENEDIS_165.readFeatures(json_LigneshautetensionariennesENEDIS_165, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneshautetensionariennesENEDIS_165 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneshautetensionariennesENEDIS_165.addFeatures(features_LigneshautetensionariennesENEDIS_165);
var lyr_LigneshautetensionariennesENEDIS_165 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneshautetensionariennesENEDIS_165, 
                style: style_LigneshautetensionariennesENEDIS_165,
                popuplayertitle: 'Lignes haute tension aériennes ENEDIS',
                interactive: true,
                title: '<img src="styles/legend/LigneshautetensionariennesENEDIS_165.png" /> Lignes haute tension aériennes ENEDIS'
            });
var format_LigneshautetensionRTE_166 = new ol.format.GeoJSON();
var features_LigneshautetensionRTE_166 = format_LigneshautetensionRTE_166.readFeatures(json_LigneshautetensionRTE_166, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LigneshautetensionRTE_166 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LigneshautetensionRTE_166.addFeatures(features_LigneshautetensionRTE_166);
var lyr_LigneshautetensionRTE_166 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LigneshautetensionRTE_166, 
                style: style_LigneshautetensionRTE_166,
                popuplayertitle: 'Lignes haute tension RTE',
                interactive: true,
                title: '<img src="styles/legend/LigneshautetensionRTE_166.png" /> Lignes haute tension RTE'
            });
var format_Postesdetransformation_167 = new ol.format.GeoJSON();
var features_Postesdetransformation_167 = format_Postesdetransformation_167.readFeatures(json_Postesdetransformation_167, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postesdetransformation_167 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postesdetransformation_167.addFeatures(features_Postesdetransformation_167);
var lyr_Postesdetransformation_167 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postesdetransformation_167, 
                style: style_Postesdetransformation_167,
                popuplayertitle: 'Postes de transformation',
                interactive: true,
                title: '<img src="styles/legend/Postesdetransformation_167.png" /> Postes de transformation'
            });
var format_Itinraireautre_168 = new ol.format.GeoJSON();
var features_Itinraireautre_168 = format_Itinraireautre_168.readFeatures(json_Itinraireautre_168, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Itinraireautre_168 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Itinraireautre_168.addFeatures(features_Itinraireautre_168);
var lyr_Itinraireautre_168 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Itinraireautre_168, 
                style: style_Itinraireautre_168,
                popuplayertitle: 'Itinéraire autre',
                interactive: true,
                title: '<img src="styles/legend/Itinraireautre_168.png" /> Itinéraire autre'
            });
var format_Voieferre_169 = new ol.format.GeoJSON();
var features_Voieferre_169 = format_Voieferre_169.readFeatures(json_Voieferre_169, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voieferre_169 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voieferre_169.addFeatures(features_Voieferre_169);
var lyr_Voieferre_169 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voieferre_169, 
                style: style_Voieferre_169,
                popuplayertitle: 'Voie ferrée',
                interactive: true,
                title: '<img src="styles/legend/Voieferre_169.png" /> Voie ferrée'
            });
var format_RoutesdeGrandeCirculation_170 = new ol.format.GeoJSON();
var features_RoutesdeGrandeCirculation_170 = format_RoutesdeGrandeCirculation_170.readFeatures(json_RoutesdeGrandeCirculation_170, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutesdeGrandeCirculation_170 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutesdeGrandeCirculation_170.addFeatures(features_RoutesdeGrandeCirculation_170);
var lyr_RoutesdeGrandeCirculation_170 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutesdeGrandeCirculation_170, 
                style: style_RoutesdeGrandeCirculation_170,
                popuplayertitle: 'Routes de Grande Circulation',
                interactive: true,
                title: '<img src="styles/legend/RoutesdeGrandeCirculation_170.png" /> Routes de Grande Circulation'
            });
var format_Routesnumrotesounommes_171 = new ol.format.GeoJSON();
var features_Routesnumrotesounommes_171 = format_Routesnumrotesounommes_171.readFeatures(json_Routesnumrotesounommes_171, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesnumrotesounommes_171 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesnumrotesounommes_171.addFeatures(features_Routesnumrotesounommes_171);
var lyr_Routesnumrotesounommes_171 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesnumrotesounommes_171, 
                style: style_Routesnumrotesounommes_171,
                popuplayertitle: 'Routes numérotées ou nommées',
                interactive: true,
    title: 'Routes numérotées ou nommées<br />\
    <img src="styles/legend/Routesnumrotesounommes_171_0.png" /> Autoroute<br />\
    <img src="styles/legend/Routesnumrotesounommes_171_1.png" /> Nationale<br />\
    <img src="styles/legend/Routesnumrotesounommes_171_2.png" /> Départementale<br />\
    <img src="styles/legend/Routesnumrotesounommes_171_3.png" /> Route nommée<br />\
    <img src="styles/legend/Routesnumrotesounommes_171_4.png" /> Voie verte<br />' });
var format_Niveaudurisque_172 = new ol.format.GeoJSON();
var features_Niveaudurisque_172 = format_Niveaudurisque_172.readFeatures(json_Niveaudurisque_172, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveaudurisque_172 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveaudurisque_172.addFeatures(features_Niveaudurisque_172);
var lyr_Niveaudurisque_172 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveaudurisque_172, 
                style: style_Niveaudurisque_172,
                popuplayertitle: 'Niveau du risque',
                interactive: true,
    title: 'Niveau du risque<br />\
    <img src="styles/legend/Niveaudurisque_172_0.png" /> Faible<br />\
    <img src="styles/legend/Niveaudurisque_172_1.png" /> Moyen<br />\
    <img src="styles/legend/Niveaudurisque_172_2.png" /> Fort<br />' });
var format_Zonesdalas_173 = new ol.format.GeoJSON();
var features_Zonesdalas_173 = format_Zonesdalas_173.readFeatures(json_Zonesdalas_173, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesdalas_173 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesdalas_173.addFeatures(features_Zonesdalas_173);
var lyr_Zonesdalas_173 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesdalas_173, 
                style: style_Zonesdalas_173,
                popuplayertitle: 'Zones d\'aléas',
                interactive: true,
    title: 'Zones d\'aléas<br />\
    <img src="styles/legend/Zonesdalas_173_0.png" /> Faible<br />\
    <img src="styles/legend/Zonesdalas_173_1.png" /> Moyen<br />\
    <img src="styles/legend/Zonesdalas_173_2.png" /> Fort<br />\
    <img src="styles/legend/Zonesdalas_173_3.png" /> Vigilance<br />\
    <img src="styles/legend/Zonesdalas_173_4.png" /> Nappe<br />' });
var format_Zonesrglementaires_174 = new ol.format.GeoJSON();
var features_Zonesrglementaires_174 = format_Zonesrglementaires_174.readFeatures(json_Zonesrglementaires_174, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesrglementaires_174 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesrglementaires_174.addFeatures(features_Zonesrglementaires_174);
var lyr_Zonesrglementaires_174 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesrglementaires_174, 
                style: style_Zonesrglementaires_174,
                popuplayertitle: 'Zones réglementaires',
                interactive: true,
    title: 'Zones réglementaires<br />\
    <img src="styles/legend/Zonesrglementaires_174_0.png" /> Bleu clair<br />\
    <img src="styles/legend/Zonesrglementaires_174_1.png" /> Rouge<br />\
    <img src="styles/legend/Zonesrglementaires_174_2.png" /> Violet<br />' });
var format_Ruissellement_175 = new ol.format.GeoJSON();
var features_Ruissellement_175 = format_Ruissellement_175.readFeatures(json_Ruissellement_175, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruissellement_175 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruissellement_175.addFeatures(features_Ruissellement_175);
var lyr_Ruissellement_175 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruissellement_175, 
                style: style_Ruissellement_175,
                popuplayertitle: 'Ruissellement',
                interactive: true,
                title: '<img src="styles/legend/Ruissellement_175.png" /> Ruissellement'
            });
var format_Secteurs_176 = new ol.format.GeoJSON();
var features_Secteurs_176 = format_Secteurs_176.readFeatures(json_Secteurs_176, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_176 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_176.addFeatures(features_Secteurs_176);
var lyr_Secteurs_176 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_176, 
                style: style_Secteurs_176,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_176_0.png" /> 1<br />\
    <img src="styles/legend/Secteurs_176_1.png" /> 2<br />\
    <img src="styles/legend/Secteurs_176_2.png" /> 3<br />\
    <img src="styles/legend/Secteurs_176_3.png" /> 4<br />' });
var format_ICPE_177 = new ol.format.GeoJSON();
var features_ICPE_177 = format_ICPE_177.readFeatures(json_ICPE_177, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICPE_177 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICPE_177.addFeatures(features_ICPE_177);
var lyr_ICPE_177 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICPE_177, 
                style: style_ICPE_177,
                popuplayertitle: 'ICPE',
                interactive: true,
    title: 'ICPE<br />\
    <img src="styles/legend/ICPE_177_0.png" /> Activités des sièges sociaux ; conseil de gestion<br />\
    <img src="styles/legend/ICPE_177_1.png" /> Collecte des déchets/traitements des eaux usées<br />\
    <img src="styles/legend/ICPE_177_2.png" /> Commerce<br />\
    <img src="styles/legend/ICPE_177_3.png" /> Culture et production animale, chasse et services annexes<br />\
    <img src="styles/legend/ICPE_177_4.png" /> Dépollution et autres services de gestion des déchets<br />\
    <img src="styles/legend/ICPE_177_5.png" /> Fabrications/manufactures <br />\
    <img src="styles/legend/ICPE_177_6.png" /> Génie civil<br />\
    <img src="styles/legend/ICPE_177_7.png" /> Industries<br />\
    <img src="styles/legend/ICPE_177_8.png" /> Production et distribution d\'électricité, de gaz, de vapeur et d\'air conditionné<br />\
    <img src="styles/legend/ICPE_177_9.png" /> Entreprises de travaux/constructions<br />' });
var format_SitesBASOL_178 = new ol.format.GeoJSON();
var features_SitesBASOL_178 = format_SitesBASOL_178.readFeatures(json_SitesBASOL_178, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesBASOL_178 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesBASOL_178.addFeatures(features_SitesBASOL_178);
var lyr_SitesBASOL_178 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesBASOL_178, 
                style: style_SitesBASOL_178,
                popuplayertitle: 'Sites BASOL',
                interactive: true,
                title: '<img src="styles/legend/SitesBASOL_178.png" /> Sites BASOL'
            });
var format_Sitespollus_179 = new ol.format.GeoJSON();
var features_Sitespollus_179 = format_Sitespollus_179.readFeatures(json_Sitespollus_179, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitespollus_179 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitespollus_179.addFeatures(features_Sitespollus_179);
var lyr_Sitespollus_179 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitespollus_179, 
                style: style_Sitespollus_179,
                popuplayertitle: 'Sites pollués',
                interactive: true,
                title: '<img src="styles/legend/Sitespollus_179.png" /> Sites pollués'
            });
var format_Zonesimpermables_180 = new ol.format.GeoJSON();
var features_Zonesimpermables_180 = format_Zonesimpermables_180.readFeatures(json_Zonesimpermables_180, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesimpermables_180 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesimpermables_180.addFeatures(features_Zonesimpermables_180);
var lyr_Zonesimpermables_180 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesimpermables_180, 
                style: style_Zonesimpermables_180,
                popuplayertitle: 'Zones imperméables',
                interactive: true,
                title: '<img src="styles/legend/Zonesimpermables_180.png" /> Zones imperméables'
            });
var format_Remontesdenappes_181 = new ol.format.GeoJSON();
var features_Remontesdenappes_181 = format_Remontesdenappes_181.readFeatures(json_Remontesdenappes_181, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Remontesdenappes_181 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Remontesdenappes_181.addFeatures(features_Remontesdenappes_181);
var lyr_Remontesdenappes_181 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Remontesdenappes_181, 
                style: style_Remontesdenappes_181,
                popuplayertitle: 'Remontées de nappes',
                interactive: true,
    title: 'Remontées de nappes<br />\
    <img src="styles/legend/Remontesdenappes_181_0.png" /> Zones potentiellement sujettes aux débordements de nappe<br />\
    <img src="styles/legend/Remontesdenappes_181_1.png" /> Zones potentiellement sujettes aux inondations de cave<br />' });
var format_ZNIEFFtype2_182 = new ol.format.GeoJSON();
var features_ZNIEFFtype2_182 = format_ZNIEFFtype2_182.readFeatures(json_ZNIEFFtype2_182, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFtype2_182 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFtype2_182.addFeatures(features_ZNIEFFtype2_182);
var lyr_ZNIEFFtype2_182 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFtype2_182, 
                style: style_ZNIEFFtype2_182,
                popuplayertitle: 'ZNIEFF type 2',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFFtype2_182.png" /> ZNIEFF type 2'
            });
var format_ZNIEFFtype1_183 = new ol.format.GeoJSON();
var features_ZNIEFFtype1_183 = format_ZNIEFFtype1_183.readFeatures(json_ZNIEFFtype1_183, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFtype1_183 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFtype1_183.addFeatures(features_ZNIEFFtype1_183);
var lyr_ZNIEFFtype1_183 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFtype1_183, 
                style: style_ZNIEFFtype1_183,
                popuplayertitle: 'ZNIEFF type 1',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFFtype1_183.png" /> ZNIEFF type 1'
            });
var format_Zoneshumides_184 = new ol.format.GeoJSON();
var features_Zoneshumides_184 = format_Zoneshumides_184.readFeatures(json_Zoneshumides_184, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_184 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_184.addFeatures(features_Zoneshumides_184);
var lyr_Zoneshumides_184 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_184, 
                style: style_Zoneshumides_184,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_184.png" /> Zones humides'
            });
var format_Natura2000_185 = new ol.format.GeoJSON();
var features_Natura2000_185 = format_Natura2000_185.readFeatures(json_Natura2000_185, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura2000_185 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura2000_185.addFeatures(features_Natura2000_185);
var lyr_Natura2000_185 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natura2000_185, 
                style: style_Natura2000_185,
                popuplayertitle: 'Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/Natura2000_185.png" /> Natura 2000'
            });
var format_Cimetire_186 = new ol.format.GeoJSON();
var features_Cimetire_186 = format_Cimetire_186.readFeatures(json_Cimetire_186, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cimetire_186 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cimetire_186.addFeatures(features_Cimetire_186);
var lyr_Cimetire_186 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cimetire_186,
maxResolution:7.00111653806549,
 
                style: style_Cimetire_186,
                popuplayertitle: 'Cimetière',
                interactive: true,
                title: '<img src="styles/legend/Cimetire_186.png" /> Cimetière'
            });
var format_Rservoir_187 = new ol.format.GeoJSON();
var features_Rservoir_187 = format_Rservoir_187.readFeatures(json_Rservoir_187, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoir_187 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoir_187.addFeatures(features_Rservoir_187);
var lyr_Rservoir_187 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoir_187,
maxResolution:7.00111653806549,
 
                style: style_Rservoir_187,
                popuplayertitle: 'Réservoir',
                interactive: true,
                title: '<img src="styles/legend/Rservoir_187.png" /> Réservoir'
            });
var format_Terraindesport_188 = new ol.format.GeoJSON();
var features_Terraindesport_188 = format_Terraindesport_188.readFeatures(json_Terraindesport_188, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraindesport_188 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraindesport_188.addFeatures(features_Terraindesport_188);
var lyr_Terraindesport_188 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terraindesport_188,
maxResolution:7.00111653806549,
 
                style: style_Terraindesport_188,
                popuplayertitle: 'Terrain de sport',
                interactive: true,
                title: '<img src="styles/legend/Terraindesport_188.png" /> Terrain de sport'
            });
var format_Monument_189 = new ol.format.GeoJSON();
var features_Monument_189 = format_Monument_189.readFeatures(json_Monument_189, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monument_189 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monument_189.addFeatures(features_Monument_189);
var lyr_Monument_189 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monument_189,
maxResolution:7.00111653806549,
 
                style: style_Monument_189,
                popuplayertitle: 'Monument',
                interactive: true,
                title: '<img src="styles/legend/Monument_189.png" /> Monument'
            });
var format_Indiffrenci_190 = new ol.format.GeoJSON();
var features_Indiffrenci_190 = format_Indiffrenci_190.readFeatures(json_Indiffrenci_190, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indiffrenci_190 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indiffrenci_190.addFeatures(features_Indiffrenci_190);
var lyr_Indiffrenci_190 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indiffrenci_190,
maxResolution:7.00111653806549,
 
                style: style_Indiffrenci_190,
                popuplayertitle: 'Indifférencié',
                interactive: true,
                title: '<img src="styles/legend/Indiffrenci_190.png" /> Indifférencié'
            });
var format_Industrielagricoleoucommercial_191 = new ol.format.GeoJSON();
var features_Industrielagricoleoucommercial_191 = format_Industrielagricoleoucommercial_191.readFeatures(json_Industrielagricoleoucommercial_191, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrielagricoleoucommercial_191 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrielagricoleoucommercial_191.addFeatures(features_Industrielagricoleoucommercial_191);
var lyr_Industrielagricoleoucommercial_191 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrielagricoleoucommercial_191,
maxResolution:7.00111653806549,
 
                style: style_Industrielagricoleoucommercial_191,
                popuplayertitle: 'Industriel, agricole ou commercial',
                interactive: true,
                title: '<img src="styles/legend/Industrielagricoleoucommercial_191.png" /> Industriel, agricole ou commercial'
            });
var format_Constructionsponctuelles_192 = new ol.format.GeoJSON();
var features_Constructionsponctuelles_192 = format_Constructionsponctuelles_192.readFeatures(json_Constructionsponctuelles_192, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constructionsponctuelles_192 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constructionsponctuelles_192.addFeatures(features_Constructionsponctuelles_192);
var lyr_Constructionsponctuelles_192 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Constructionsponctuelles_192,
maxResolution:7.00111653806549,
 
                style: style_Constructionsponctuelles_192,
                popuplayertitle: 'Constructions ponctuelles',
                interactive: true,
                title: '<img src="styles/legend/Constructionsponctuelles_192.png" /> Constructions ponctuelles'
            });
var format_Pylne_193 = new ol.format.GeoJSON();
var features_Pylne_193 = format_Pylne_193.readFeatures(json_Pylne_193, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pylne_193 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pylne_193.addFeatures(features_Pylne_193);
var lyr_Pylne_193 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pylne_193, 
                style: style_Pylne_193,
                popuplayertitle: 'Pylône',
                interactive: true,
                title: '<img src="styles/legend/Pylne_193.png" /> Pylône'
            });
var format_CCdes4Rivires_194 = new ol.format.GeoJSON();
var features_CCdes4Rivires_194 = format_CCdes4Rivires_194.readFeatures(json_CCdes4Rivires_194, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCdes4Rivires_194 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCdes4Rivires_194.addFeatures(features_CCdes4Rivires_194);
var lyr_CCdes4Rivires_194 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCdes4Rivires_194, 
                style: style_CCdes4Rivires_194,
                popuplayertitle: 'CC des 4 Rivières',
                interactive: true,
                title: '<img src="styles/legend/CCdes4Rivires_194.png" /> CC des 4 Rivières'
            });
var format_CCBrayEawy_195 = new ol.format.GeoJSON();
var features_CCBrayEawy_195 = format_CCBrayEawy_195.readFeatures(json_CCBrayEawy_195, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCBrayEawy_195 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCBrayEawy_195.addFeatures(features_CCBrayEawy_195);
var lyr_CCBrayEawy_195 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCBrayEawy_195, 
                style: style_CCBrayEawy_195,
                popuplayertitle: 'CC Bray-Eawy',
                interactive: true,
                title: '<img src="styles/legend/CCBrayEawy_195.png" /> CC Bray-Eawy'
            });
var format_CCdeLondinieres_196 = new ol.format.GeoJSON();
var features_CCdeLondinieres_196 = format_CCdeLondinieres_196.readFeatures(json_CCdeLondinieres_196, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCdeLondinieres_196 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCdeLondinieres_196.addFeatures(features_CCdeLondinieres_196);
var lyr_CCdeLondinieres_196 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCdeLondinieres_196, 
                style: style_CCdeLondinieres_196,
                popuplayertitle: 'CC de Londinieres',
                interactive: true,
                title: '<img src="styles/legend/CCdeLondinieres_196.png" /> CC de Londinieres'
            });
var format_Parcellescadastrales_197 = new ol.format.GeoJSON();
var features_Parcellescadastrales_197 = format_Parcellescadastrales_197.readFeatures(json_Parcellescadastrales_197, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcellescadastrales_197 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcellescadastrales_197.addFeatures(features_Parcellescadastrales_197);
var lyr_Parcellescadastrales_197 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcellescadastrales_197,
maxResolution:7.00111653806549,
 
                style: style_Parcellescadastrales_197,
                popuplayertitle: 'Parcelles cadastrales',
                interactive: true,
                title: '<img src="styles/legend/Parcellescadastrales_197.png" /> Parcelles cadastrales'
            });
var format_Communesassociesoudlgues_198 = new ol.format.GeoJSON();
var features_Communesassociesoudlgues_198 = format_Communesassociesoudlgues_198.readFeatures(json_Communesassociesoudlgues_198, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesassociesoudlgues_198 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesassociesoudlgues_198.addFeatures(features_Communesassociesoudlgues_198);
var lyr_Communesassociesoudlgues_198 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesassociesoudlgues_198, 
                style: style_Communesassociesoudlgues_198,
                popuplayertitle: 'Communes associées ou déléguées',
                interactive: false,
                title: '<img src="styles/legend/Communesassociesoudlgues_198.png" /> Communes associées ou déléguées'
            });
var format_CommunesadhrentesADS_199 = new ol.format.GeoJSON();
var features_CommunesadhrentesADS_199 = format_CommunesadhrentesADS_199.readFeatures(json_CommunesadhrentesADS_199, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesadhrentesADS_199 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesadhrentesADS_199.addFeatures(features_CommunesadhrentesADS_199);
var lyr_CommunesadhrentesADS_199 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesadhrentesADS_199, 
                style: style_CommunesadhrentesADS_199,
                popuplayertitle: 'Communes adhérentes ADS',
                interactive: false,
                title: '<img src="styles/legend/CommunesadhrentesADS_199.png" /> Communes adhérentes ADS'
            });
var format_Communes_200 = new ol.format.GeoJSON();
var features_Communes_200 = format_Communes_200.readFeatures(json_Communes_200, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_200 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_200.addFeatures(features_Communes_200);
var lyr_Communes_200 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_200, 
                style: style_Communes_200,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_200.png" /> Communes'
            });
var format_Nomdescommunes_201 = new ol.format.GeoJSON();
var features_Nomdescommunes_201 = format_Nomdescommunes_201.readFeatures(json_Nomdescommunes_201, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdescommunes_201 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdescommunes_201.addFeatures(features_Nomdescommunes_201);
var lyr_Nomdescommunes_201 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdescommunes_201, 
                style: style_Nomdescommunes_201,
                popuplayertitle: 'Nom des communes',
                interactive: false,
                title: '<img src="styles/legend/Nomdescommunes_201.png" /> Nom des communes'
            });
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_CCdes4Rivires_194,lyr_CCBrayEawy_195,lyr_CCdeLondinieres_196,lyr_Parcellescadastrales_197,lyr_Communesassociesoudlgues_198,lyr_CommunesadhrentesADS_199,lyr_Communes_200,lyr_Nomdescommunes_201,],
                                fold: 'open',
                                title: 'Limites administratives'});
var group_Bti = new ol.layer.Group({
                                layers: [lyr_Cimetire_186,lyr_Rservoir_187,lyr_Terraindesport_188,lyr_Monument_189,lyr_Indiffrenci_190,lyr_Industrielagricoleoucommercial_191,lyr_Constructionsponctuelles_192,lyr_Pylne_193,],
                                fold: 'close',
                                title: 'Bâti'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_ZNIEFFtype2_182,lyr_ZNIEFFtype1_183,lyr_Zoneshumides_184,lyr_Natura2000_185,],
                                fold: 'close',
                                title: 'Zonages environnementaux'});
var group_Risqueshydrologiques = new ol.layer.Group({
                                layers: [lyr_Zonesimpermables_180,lyr_Remontesdenappes_181,],
                                fold: 'close',
                                title: 'Risques hydrologiques'});
var group_Risquesindustriels = new ol.layer.Group({
                                layers: [lyr_ICPE_177,lyr_SitesBASOL_178,lyr_Sitespollus_179,],
                                fold: 'close',
                                title: 'Risques industriels'});
var group_AZIVarenne = new ol.layer.Group({
                                layers: [lyr_Secteurs_176,],
                                fold: 'close',
                                title: 'AZI Varenne'});
var group_PPRiCaillyAubetteRobec = new ol.layer.Group({
                                layers: [lyr_Zonesdalas_173,lyr_Zonesrglementaires_174,lyr_Ruissellement_175,],
                                fold: 'close',
                                title: 'PPRi Cailly-Aubette-Robec'});
var group_Retraitgonflementdesargiles = new ol.layer.Group({
                                layers: [lyr_Niveaudurisque_172,],
                                fold: 'close',
                                title: 'Retrait-gonflement des argiles'});
var group_Voiesdecommunication = new ol.layer.Group({
                                layers: [lyr_Itinraireautre_168,lyr_Voieferre_169,lyr_RoutesdeGrandeCirculation_170,lyr_Routesnumrotesounommes_171,],
                                fold: 'close',
                                title: 'Voies de communication'});
var group_Electricit = new ol.layer.Group({
                                layers: [lyr_LignesbassetensionsouterrainesENEDIS_162,lyr_LignesbassetensionariennesENEDIS_163,lyr_LigneshautetensionsouterrainesENEDIS_164,lyr_LigneshautetensionariennesENEDIS_165,lyr_LigneshautetensionRTE_166,lyr_Postesdetransformation_167,],
                                fold: 'close',
                                title: 'Electricité'});
var group_Gaz = new ol.layer.Group({
                                layers: [lyr_CanalisationsgazGRT_160,lyr_CanalisationsgazGRDF_161,],
                                fold: 'close',
                                title: 'Gaz'});
var group_Hydrocarbures = new ol.layer.Group({
                                layers: [lyr_Canalisationshydrocarbures_159,],
                                fold: 'close',
                                title: 'Hydrocarbures'});
var group_Bruit = new ol.layer.Group({
                                layers: [lyr_RoutesconcdesTypeC_155,lyr_RoutesconcdesTypeA_156,lyr_RoutesTypeC_157,lyr_RoutesTypeA_158,],
                                fold: 'close',
                                title: 'Bruit'});
var group_Patrimoine = new ol.layer.Group({
                                layers: [lyr_ZPPAGournayenBrayZone2_145,lyr_ZPPAGournayenBrayZone1_146,lyr_Sitesauxabords_147,lyr_SUPMH_148,lyr_SPR_149,lyr_Sitesclasss_150,lyr_Sitesinscrits_151,lyr_Immeubles_152,lyr_ZPPAindiffrencies_153,lyr_ZPPAindiffrenciescentrodes_154,],
                                fold: 'close',
                                title: 'Patrimoine'});
var group_Elmentsnaturels = new ol.layer.Group({
                                layers: [lyr_Fortspubliques_137,lyr_Haies_138,lyr_Trononshydrographiques_139,lyr_Surfaceshydrographiques_140,lyr_Dtailshydrographiques_141,lyr_MaresPRAM_142,lyr_Bassinversanttopographique_143,lyr_Toponymiehydrographie_144,],
                                fold: 'close',
                                title: 'Eléments naturels'});
var group_Captagesdeau = new ol.layer.Group({
                                layers: [lyr_PPE_134,lyr_PPI_135,lyr_PPR_136,],
                                fold: 'close',
                                title: 'Captages d\'eau'});
var group_Servicesetactivits2024 = new ol.layer.Group({
                                layers: [lyr_Zonedactivitetdeservice_132,lyr_ERP_133,],
                                fold: 'close',
                                title: 'Services et activités 2024'});
var group_EnquteagricoleLaFeuillie = new ol.layer.Group({
                                layers: [lyr_Primtredeprotectionincendie100m_126,lyr_Primtredeprotectionincendie15m_127,lyr_lotsanonymesPAC_128,lyr_Corpsdeferme_129,lyr_Distancedereculautourdubti_130,lyr_Btiagricole_131,],
                                fold: 'close',
                                title: 'Enquête agricole La Feuillie'});
var group_EnquteagricoleLesGrandesVentes = new ol.layer.Group({
                                layers: [lyr_Corpsdeferme_123,lyr_Distancedereculautourdubti_124,lyr_Btiagricole_125,],
                                fold: 'close',
                                title: 'Enquête agricole Les Grandes-Ventes'});
var group_BzancourtCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_118,lyr_Prescriptionssurfaciques_119,lyr_Prescriptionslinaires_120,lyr_Prescriptionsponctuelles_121,lyr_Codessecteurs_122,],
                                fold: 'close',
                                title: 'Bézancourt - Carte Communale'});
var group_BoscMesnilCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_116,lyr_Codessecteurs_117,],
                                fold: 'close',
                                title: 'Bosc-Mesnil - Carte Communale'});
var group_BouellesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_114,lyr_Codessecteurs_115,],
                                fold: 'close',
                                title: 'Bouelles - Carte Communale'});
var group_BoscBrengerPLU = new ol.layer.Group({
                                layers: [lyr_Prescriptionssurfaciques_113,],
                                fold: 'close',
                                title: 'Bosc-Bérenger - PLU'});
var group_BrmontierMervalCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_108,lyr_Prescriptionssurfaciques_109,lyr_Prescriptionslinaires_110,lyr_Prescriptionsponctuelles_111,lyr_Codessecteurs_112,],
                                fold: 'close',
                                title: 'Brémontier-Merval - Carte Communale'});
var group_CalengevilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_107,],
                                fold: 'close',
                                title: 'Calengeville - Carte Communale'});
var group_CompainvilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_105,lyr_Codessecteurs_106,],
                                fold: 'close',
                                title: 'Compainville - Carte Communale'});
var group_CritotPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_100,lyr_DroitdePremptionurbain_101,lyr_Prescriptionssurfaciques_102,lyr_Prescriptionsponctuelles_103,lyr_Codessecteurs_104,],
                                fold: 'close',
                                title: 'Critot - PLU'});
var group_CuySaintFiacreCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_97,lyr_DroitdePremption_98,lyr_Codessecteurs_99,],
                                fold: 'close',
                                title: 'Cuy-Saint-Fiacre - Carte Communale'});
var group_DampierreenBrayCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_94,lyr_Droitdepremption_95,lyr_Codessecteurs_96,],
                                fold: 'close',
                                title: 'Dampierre-en-Bray - Carte Communale'});
var group_ElbeufenBrayCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_91,lyr_Bois_92,lyr_Codessecteurs_93,],
                                fold: 'close',
                                title: 'Elbeuf-en-Bray - Carte Communale'});
var group_ErnemontlaVilletteCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_88,lyr_Espaceboisclass_89,lyr_Codessecteurs_90,],
                                fold: 'close',
                                title: 'Ernemont-la-Villette - Carte Communale'});
var group_EsclavellesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_86,lyr_Codessecteurs_87,],
                                fold: 'close',
                                title: 'Esclavelles - Carte Communale'});
var group_FerriresenBrayPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_81,lyr_Prescriptionssurfaciques_82,lyr_Prescriptionslinaires_83,lyr_Prescriptionsponctuelles_84,lyr_Codessecteurs_85,],
                                fold: 'close',
                                title: 'Ferrières-en-Bray - PLU'});
var group_FesquesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_79,lyr_Codessecteurs_80,],
                                fold: 'close',
                                title: 'Fesques - Carte Communale'});
var group_ForgeslesEauxPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_72,lyr_Prescriptionssurfaciques2_73,lyr_Prescriptionssurfaciques1_74,lyr_Ruissellement_75,lyr_Prescriptionslinaires_76,lyr_Prescriptionsponctuelles_77,lyr_Codessecteurs_78,],
                                fold: 'close',
                                title: 'Forges-les-Eaux - PLU'});
var group_FryCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_70,lyr_Codessecteurs_71,],
                                fold: 'close',
                                title: 'Fry - Carte Communale'});
var group_GaillefontaineCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_68,lyr_Codessecteurs_69,],
                                fold: 'close',
                                title: 'Gaillefontaine - Carte Communale'});
var group_GournayenBrayPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_63,lyr_Prescriptionssurfaciques_64,lyr_Prescriptionslinaires_65,lyr_Prescriptionsponctuelles_66,lyr_Codessecteurs_67,],
                                fold: 'close',
                                title: 'Gournay-en-Bray - PLU'});
var group_LaFeuilliePLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_58,lyr_Prescriptionssurfaciques_59,lyr_Prescriptionslinaires_60,lyr_Prescriptionsponctuelles_61,lyr_Codessecteurs_62,],
                                fold: 'close',
                                title: 'La Feuillie - PLU'});
var group_LesGrandesVentesPLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_53,lyr_Prescriptionssurfaciques_54,lyr_Prescriptionslinaires_55,lyr_Prescriptionsponctuelles_56,lyr_Codessecteurs_57,],
                                fold: 'close',
                                title: 'Les Grandes-Ventes - PLU'});
var group_MassyCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_52,],
                                fold: 'close',
                                title: 'Massy - Carte Communale'});
var group_MathonvilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_50,lyr_Codessecteurs_51,],
                                fold: 'close',
                                title: 'Mathonville - Carte Communale'});
var group_MaucomblePLU = new ol.layer.Group({
                                layers: [lyr_Secteurs_44,lyr_Prescriptionssurfaciques2_45,lyr_Prescriptionssurfaciques1_46,lyr_Prescriptionslinaire_47,lyr_Prescriptionsponctuelles_48,lyr_Codessecteurs_49,],
                                fold: 'close',
                                title: 'Maucomble - PLU'});
var group_MsanguevilleCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_42,lyr_Codessecteurs_43,],
                                fold: 'close',
                                title: 'Mésangueville - Carte Communale'});
var group_MolagniesCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_40,lyr_Codessecteurs_41,],
                                fold: 'close',
                                title: 'Molagnies - Carte Communale'});
var group_MontrolierCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_38,lyr_Codessecteurs_39,],
                                fold: 'close',
                                title: 'Montérolier - Carte Communale'});
var group_MontrotyCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_36,lyr_Codessecteurs_37,],
                                fold: 'close',
                                title: 'Montroty - Carte Communale'});
var group_NesleHodengCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_34,lyr_Codessecteurs_35,],
                                fold: 'close',
                                title: 'Nesle-Hodeng - Carte Communale'});
var group_NeufMarchCarteCommunale = new ol.layer.Group({
                                layers: [lyr_Secteurs_32,lyr_Codessecteurs_33,],
                                fold: 'close',
                                title: 'Neuf-Marché - Carte Communale'});
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

lyr_BDOrthoIGN_0.setVisible(true);lyr_PETRduPaysdeBray_1.setVisible(true);lyr_Secteurs_2.setVisible(false);lyr_Secteurs_3.setVisible(false);lyr_Prescriptionssurfaciques_4.setVisible(false);lyr_Prescriptionslinaires_5.setVisible(false);lyr_Prescriptionsponctuelles_6.setVisible(false);lyr_Codessecteurs_7.setVisible(false);lyr_Secteurs_8.setVisible(false);lyr_Codessecteurs_9.setVisible(false);lyr_Secteurs_10.setVisible(false);lyr_Prescriptionssurfaciques_11.setVisible(false);lyr_Primtresdeprotectiondecaptage_12.setVisible(false);lyr_Prescriptionslinaires_13.setVisible(false);lyr_Ruissellement_14.setVisible(false);lyr_Prescriptionsponctuelles_15.setVisible(false);lyr_Codessecteurs_16.setVisible(false);lyr_Secteurs_17.setVisible(false);lyr_Codessecteurs_18.setVisible(false);lyr_Secteurs_19.setVisible(false);lyr_Codessecteurs_20.setVisible(false);lyr_Secteurs_21.setVisible(false);lyr_Prescriptionssurfaciques_22.setVisible(false);lyr_Prescriptionslinaires_23.setVisible(false);lyr_Prescriptionsponctuelles_24.setVisible(false);lyr_Codessecteurs_25.setVisible(false);lyr_Secteurs_26.setVisible(false);lyr_Boisprotgs_27.setVisible(false);lyr_Codessecteurs_28.setVisible(false);lyr_Secteurs_29.setVisible(false);lyr_Prescriptionssurfaciques_30.setVisible(false);lyr_Codessecteurs_31.setVisible(false);lyr_Secteurs_32.setVisible(false);lyr_Codessecteurs_33.setVisible(false);lyr_Secteurs_34.setVisible(false);lyr_Codessecteurs_35.setVisible(false);lyr_Secteurs_36.setVisible(false);lyr_Codessecteurs_37.setVisible(false);lyr_Secteurs_38.setVisible(false);lyr_Codessecteurs_39.setVisible(false);lyr_Secteurs_40.setVisible(false);lyr_Codessecteurs_41.setVisible(false);lyr_Secteurs_42.setVisible(false);lyr_Codessecteurs_43.setVisible(false);lyr_Secteurs_44.setVisible(false);lyr_Prescriptionssurfaciques2_45.setVisible(false);lyr_Prescriptionssurfaciques1_46.setVisible(false);lyr_Prescriptionslinaire_47.setVisible(false);lyr_Prescriptionsponctuelles_48.setVisible(false);lyr_Codessecteurs_49.setVisible(false);lyr_Secteurs_50.setVisible(false);lyr_Codessecteurs_51.setVisible(false);lyr_Secteurs_52.setVisible(false);lyr_Secteurs_53.setVisible(false);lyr_Prescriptionssurfaciques_54.setVisible(false);lyr_Prescriptionslinaires_55.setVisible(false);lyr_Prescriptionsponctuelles_56.setVisible(false);lyr_Codessecteurs_57.setVisible(false);lyr_Secteurs_58.setVisible(false);lyr_Prescriptionssurfaciques_59.setVisible(false);lyr_Prescriptionslinaires_60.setVisible(false);lyr_Prescriptionsponctuelles_61.setVisible(false);lyr_Codessecteurs_62.setVisible(false);lyr_Secteurs_63.setVisible(false);lyr_Prescriptionssurfaciques_64.setVisible(false);lyr_Prescriptionslinaires_65.setVisible(false);lyr_Prescriptionsponctuelles_66.setVisible(false);lyr_Codessecteurs_67.setVisible(false);lyr_Secteurs_68.setVisible(false);lyr_Codessecteurs_69.setVisible(false);lyr_Secteurs_70.setVisible(false);lyr_Codessecteurs_71.setVisible(false);lyr_Secteurs_72.setVisible(false);lyr_Prescriptionssurfaciques2_73.setVisible(false);lyr_Prescriptionssurfaciques1_74.setVisible(false);lyr_Ruissellement_75.setVisible(false);lyr_Prescriptionslinaires_76.setVisible(false);lyr_Prescriptionsponctuelles_77.setVisible(false);lyr_Codessecteurs_78.setVisible(false);lyr_Secteurs_79.setVisible(false);lyr_Codessecteurs_80.setVisible(false);lyr_Secteurs_81.setVisible(false);lyr_Prescriptionssurfaciques_82.setVisible(false);lyr_Prescriptionslinaires_83.setVisible(false);lyr_Prescriptionsponctuelles_84.setVisible(false);lyr_Codessecteurs_85.setVisible(false);lyr_Secteurs_86.setVisible(false);lyr_Codessecteurs_87.setVisible(false);lyr_Secteurs_88.setVisible(false);lyr_Espaceboisclass_89.setVisible(false);lyr_Codessecteurs_90.setVisible(false);lyr_Secteurs_91.setVisible(false);lyr_Bois_92.setVisible(false);lyr_Codessecteurs_93.setVisible(false);lyr_Secteurs_94.setVisible(false);lyr_Droitdepremption_95.setVisible(false);lyr_Codessecteurs_96.setVisible(false);lyr_Secteurs_97.setVisible(false);lyr_DroitdePremption_98.setVisible(false);lyr_Codessecteurs_99.setVisible(false);lyr_Secteurs_100.setVisible(false);lyr_DroitdePremptionurbain_101.setVisible(false);lyr_Prescriptionssurfaciques_102.setVisible(false);lyr_Prescriptionsponctuelles_103.setVisible(false);lyr_Codessecteurs_104.setVisible(false);lyr_Secteurs_105.setVisible(false);lyr_Codessecteurs_106.setVisible(false);lyr_Secteurs_107.setVisible(false);lyr_Secteurs_108.setVisible(false);lyr_Prescriptionssurfaciques_109.setVisible(false);lyr_Prescriptionslinaires_110.setVisible(false);lyr_Prescriptionsponctuelles_111.setVisible(false);lyr_Codessecteurs_112.setVisible(false);lyr_Prescriptionssurfaciques_113.setVisible(false);lyr_Secteurs_114.setVisible(false);lyr_Codessecteurs_115.setVisible(false);lyr_Secteurs_116.setVisible(false);lyr_Codessecteurs_117.setVisible(false);lyr_Secteurs_118.setVisible(false);lyr_Prescriptionssurfaciques_119.setVisible(false);lyr_Prescriptionslinaires_120.setVisible(false);lyr_Prescriptionsponctuelles_121.setVisible(false);lyr_Codessecteurs_122.setVisible(false);lyr_Corpsdeferme_123.setVisible(false);lyr_Distancedereculautourdubti_124.setVisible(false);lyr_Btiagricole_125.setVisible(false);lyr_Primtredeprotectionincendie100m_126.setVisible(false);lyr_Primtredeprotectionincendie15m_127.setVisible(false);lyr_lotsanonymesPAC_128.setVisible(false);lyr_Corpsdeferme_129.setVisible(false);lyr_Distancedereculautourdubti_130.setVisible(false);lyr_Btiagricole_131.setVisible(false);lyr_Zonedactivitetdeservice_132.setVisible(false);lyr_ERP_133.setVisible(false);lyr_PPE_134.setVisible(false);lyr_PPI_135.setVisible(false);lyr_PPR_136.setVisible(false);lyr_Fortspubliques_137.setVisible(false);lyr_Haies_138.setVisible(false);lyr_Trononshydrographiques_139.setVisible(false);lyr_Surfaceshydrographiques_140.setVisible(false);lyr_Dtailshydrographiques_141.setVisible(false);lyr_MaresPRAM_142.setVisible(false);lyr_Bassinversanttopographique_143.setVisible(false);lyr_Toponymiehydrographie_144.setVisible(false);lyr_ZPPAGournayenBrayZone2_145.setVisible(false);lyr_ZPPAGournayenBrayZone1_146.setVisible(false);lyr_Sitesauxabords_147.setVisible(false);lyr_SUPMH_148.setVisible(false);lyr_SPR_149.setVisible(false);lyr_Sitesclasss_150.setVisible(false);lyr_Sitesinscrits_151.setVisible(false);lyr_Immeubles_152.setVisible(false);lyr_ZPPAindiffrencies_153.setVisible(false);lyr_ZPPAindiffrenciescentrodes_154.setVisible(false);lyr_RoutesconcdesTypeC_155.setVisible(false);lyr_RoutesconcdesTypeA_156.setVisible(false);lyr_RoutesTypeC_157.setVisible(false);lyr_RoutesTypeA_158.setVisible(false);lyr_Canalisationshydrocarbures_159.setVisible(false);lyr_CanalisationsgazGRT_160.setVisible(false);lyr_CanalisationsgazGRDF_161.setVisible(false);lyr_LignesbassetensionsouterrainesENEDIS_162.setVisible(false);lyr_LignesbassetensionariennesENEDIS_163.setVisible(false);lyr_LigneshautetensionsouterrainesENEDIS_164.setVisible(false);lyr_LigneshautetensionariennesENEDIS_165.setVisible(false);lyr_LigneshautetensionRTE_166.setVisible(false);lyr_Postesdetransformation_167.setVisible(false);lyr_Itinraireautre_168.setVisible(false);lyr_Voieferre_169.setVisible(false);lyr_RoutesdeGrandeCirculation_170.setVisible(false);lyr_Routesnumrotesounommes_171.setVisible(false);lyr_Niveaudurisque_172.setVisible(false);lyr_Zonesdalas_173.setVisible(false);lyr_Zonesrglementaires_174.setVisible(false);lyr_Ruissellement_175.setVisible(false);lyr_Secteurs_176.setVisible(false);lyr_ICPE_177.setVisible(false);lyr_SitesBASOL_178.setVisible(false);lyr_Sitespollus_179.setVisible(false);lyr_Zonesimpermables_180.setVisible(false);lyr_Remontesdenappes_181.setVisible(false);lyr_ZNIEFFtype2_182.setVisible(false);lyr_ZNIEFFtype1_183.setVisible(false);lyr_Zoneshumides_184.setVisible(false);lyr_Natura2000_185.setVisible(false);lyr_Cimetire_186.setVisible(false);lyr_Rservoir_187.setVisible(false);lyr_Terraindesport_188.setVisible(false);lyr_Monument_189.setVisible(false);lyr_Indiffrenci_190.setVisible(false);lyr_Industrielagricoleoucommercial_191.setVisible(false);lyr_Constructionsponctuelles_192.setVisible(false);lyr_Pylne_193.setVisible(false);lyr_CCdes4Rivires_194.setVisible(false);lyr_CCBrayEawy_195.setVisible(false);lyr_CCdeLondinieres_196.setVisible(false);lyr_Parcellescadastrales_197.setVisible(false);lyr_Communesassociesoudlgues_198.setVisible(false);lyr_CommunesadhrentesADS_199.setVisible(false);lyr_Communes_200.setVisible(true);lyr_Nomdescommunes_201.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,lyr_PETRduPaysdeBray_1,group_SommeryCarteCommunale,group_SigyenBrayPLU,group_SaintSaireCarteCommunale,group_SaintSansPLU,group_SaintGermainsurEaulneCarteCommunale,group_SainteGeneviveCarteCommunale,group_SaintLucienPLU,group_RosayCarteCommunale,group_RocquemontCarteCommunale,group_NeufMarchCarteCommunale,group_NesleHodengCarteCommunale,group_MontrotyCarteCommunale,group_MontrolierCarteCommunale,group_MolagniesCarteCommunale,group_MsanguevilleCarteCommunale,group_MaucomblePLU,group_MathonvilleCarteCommunale,group_MassyCarteCommunale,group_LesGrandesVentesPLU,group_LaFeuilliePLU,group_GournayenBrayPLU,group_GaillefontaineCarteCommunale,group_FryCarteCommunale,group_ForgeslesEauxPLU,group_FesquesCarteCommunale,group_FerriresenBrayPLU,group_EsclavellesCarteCommunale,group_ErnemontlaVilletteCarteCommunale,group_ElbeufenBrayCarteCommunale,group_DampierreenBrayCarteCommunale,group_CuySaintFiacreCarteCommunale,group_CritotPLU,group_CompainvilleCarteCommunale,group_CalengevilleCarteCommunale,group_BrmontierMervalCarteCommunale,group_BoscBrengerPLU,group_BouellesCarteCommunale,group_BoscMesnilCarteCommunale,group_BzancourtCarteCommunale,group_EnquteagricoleLesGrandesVentes,group_EnquteagricoleLaFeuillie,group_Servicesetactivits2024,group_Captagesdeau,group_Elmentsnaturels,group_Patrimoine,group_Bruit,group_Hydrocarbures,group_Gaz,group_Electricit,group_Voiesdecommunication,group_Retraitgonflementdesargiles,group_PPRiCaillyAubetteRobec,group_AZIVarenne,group_Risquesindustriels,group_Risqueshydrologiques,group_Zonagesenvironnementaux,group_Bti,group_Limitesadministratives];
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
lyr_Secteurs_32.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_33.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_34.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_35.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_36.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_37.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_38.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_39.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_40.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_41.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_42.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_43.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_44.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques2_45.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionssurfaciques1_46.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaire_47.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_48.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_49.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_50.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_51.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_52.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_53.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_54.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_55.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_56.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_57.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_58.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'url_rglmt': 'url_rglmt', 'shape_peri': 'shape_peri', });
lyr_Prescriptionssurfaciques_59.set('fieldAliases', {'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'txt': 'txt', 'typepsc': 'typepsc', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'URL_RGLMT': 'URL_RGLMT', 'largeur': 'largeur', 'num_p_com': 'num_p_com', 'benef': 'benef', 'Vocation': 'Vocation', });
lyr_Prescriptionslinaires_60.set('fieldAliases', {});
lyr_Prescriptionsponctuelles_61.set('fieldAliases', {'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'txt': 'txt', 'typepsc': 'typepsc', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'URL_RGLMT': 'URL_RGLMT', });
lyr_Codessecteurs_62.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id_docurba': 'id_docurba', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'datvalid': 'datvalid', 'datappro': 'datappro', 'insee': 'insee', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'url_rglmt': 'url_rglmt', 'shape_peri': 'shape_peri', });
lyr_Secteurs_63.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_64.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_65.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_66.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_67.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_68.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_69.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_70.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_71.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_72.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques2_73.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'IDURBA': 'IDURBA', });
lyr_Prescriptionssurfaciques1_74.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Ruissellement_75.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'STYPEINF': 'STYPEINF', 'NOMFIC': 'NOMFIC', 'URLFICH': 'URLFICH', 'IDURBA': 'IDURBA', });
lyr_Prescriptionslinaires_76.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_77.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_78.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_79.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_80.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_81.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_82.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_83.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_84.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_85.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_86.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_87.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_88.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Espaceboisclass_89.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_90.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_91.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Bois_92.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_93.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_94.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Droitdepremption_95.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_96.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_97.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_DroitdePremption_98.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_99.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_100.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_DroitdePremptionurbain_101.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionssurfaciques_102.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_103.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_104.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_105.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_106.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_107.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_108.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_109.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionslinaires_110.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionsponctuelles_111.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_112.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_113.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_114.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_115.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_116.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_117.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Secteurs_118.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_119.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionslinaires_120.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Prescriptionsponctuelles_121.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEINF': 'TYPEINF', 'TYPEP': 'TYPEP', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', });
lyr_Codessecteurs_122.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TYPESECT': 'TYPESECT', 'FERMRECO': 'FERMRECO', 'DESTDOMI': 'DESTDOMI', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'INSEE': 'INSEE', 'DATAPPRO': 'DATAPPRO', 'DATVALID': 'DATVALID', });
lyr_Corpsdeferme_123.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'REALISATIO': 'REALISATIO', 'DATE': 'DATE', 'NUM_EXPLOI': 'NUM_EXPLOI', 'num_expl_1': 'num_expl_1', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'TYPE_DOS_2': 'TYPE_DOS_2', 'PRECISION': 'PRECISION', 'AD_SMT': 'AD_SMT', 'AD_BAF': 'AD_BAF', 'TYPO_CDF': 'TYPO_CDF', 'STATUT': 'STATUT', 'X': 'X', 'Y': 'Y', });
lyr_Distancedereculautourdubti_124.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Btiagricole_125.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Primtredeprotectionincendie100m_126.set('fieldAliases', {'ID': 'ID', });
lyr_Primtredeprotectionincendie15m_127.set('fieldAliases', {'ID': 'ID', });
lyr_lotsanonymesPAC_128.set('fieldAliases', {'NUM_ILOTS': 'NUM_ILOTS', 'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'COMMUNE': 'COMMUNE', 'CODE_INSEE': 'CODE_INSEE', 'S_CADASTRA': 'S_CADASTRA', 'S_CALC_MAP': 'S_CALC_MAP', });
lyr_Corpsdeferme_129.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'REALISATIO': 'REALISATIO', 'DATE': 'DATE', 'NUM_EXPLOI': 'NUM_EXPLOI', 'num_expl_1': 'num_expl_1', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'TYPE_DOS_2': 'TYPE_DOS_2', 'PRECISION': 'PRECISION', 'AD_SMT': 'AD_SMT', 'AD_BAF': 'AD_BAF', 'TYPO_CDF': 'TYPO_CDF', 'STATUT': 'STATUT', 'X': 'X', 'Y': 'Y', });
lyr_Distancedereculautourdubti_130.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Btiagricole_131.set('fieldAliases', {'NOM_EXPLOI': 'NOM_EXPLOI', 'NUM_PACAGE': 'NUM_PACAGE', 'NUM_SIREN': 'NUM_SIREN', 'NOM_COMMUN': 'NOM_COMMUN', 'CODE_INSEE': 'CODE_INSEE', 'TYPE_BATIM': 'TYPE_BATIM', 'SOUS_TYPE_': 'SOUS_TYPE_', 'LIBELLE_TY': 'LIBELLE_TY', 'TYPE_DOSSI': 'TYPE_DOSSI', 'TYPE_DOS_1': 'TYPE_DOS_1', 'surf': 'surf', 'STATUT': 'STATUT', 'PERIMETRE_': 'PERIMETRE_', });
lyr_Zonedactivitetdeservice_132.set('fieldAliases', {'ID': 'ID', 'CATEGORIE': 'CATEGORIE', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', 'NOMCOMMERC': 'NOMCOMMERC', });
lyr_ERP_133.set('fieldAliases', {'ID': 'ID', 'ID_REF': 'ID_REF', 'CATEGORIE': 'CATEGORIE', 'TYPE_1': 'TYPE_1', 'TYPE_2': 'TYPE_2', 'ACTIV_1': 'ACTIV_1', 'ACTIV_2': 'ACTIV_2', 'LIBELLE': 'LIBELLE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'PUBLIC': 'PUBLIC', 'OUVERT': 'OUVERT', 'CAP_ACC': 'CAP_ACC', 'CAP_HEBERG': 'CAP_HEBERG', 'ORIGIN_GEO': 'ORIGIN_GEO', 'TYPE_LOC': 'TYPE_LOC', 'VALID_IGN': 'VALID_IGN', 'CODE_INSEE': 'CODE_INSEE', 'SIRET': 'SIRET', 'ADR_NUMERO': 'ADR_NUMERO', 'ADR_REP': 'ADR_REP', 'ADR_COMPL': 'ADR_COMPL', 'ADR_NOM_1': 'ADR_NOM_1', 'ADR_NOM_2': 'ADR_NOM_2', 'CODE_POST': 'CODE_POST', 'ID_BATI': 'ID_BATI', 'ID_ENCEINT': 'ID_ENCEINT', });
lyr_PPE_134.set('fieldAliases', {'code_pp': 'code_pp', 'source': 'source', 'precision': 'precision', 'qualite': 'qualite', 'siren_ars': 'siren_ars', 'diffusion': 'diffusion', '_edit_date': '_edit_date', 'projet': 'projet', 'psv_code': 'psv_code', 'code_ins': 'code_ins', 'ins_cap_re': 'ins_cap_re', 'ins_pro_et': 'ins_pro_et', 'ins_pro__1': 'ins_pro__1', });
lyr_PPI_135.set('fieldAliases', {'code_pp': 'code_pp', 'source': 'source', 'precision': 'precision', 'qualite': 'qualite', 'siren_ars': 'siren_ars', 'diffusion': 'diffusion', '_edit_date': '_edit_date', 'projet': 'projet', 'psv_code': 'psv_code', 'code_ins': 'code_ins', 'ins_cap_re': 'ins_cap_re', 'ins_pro_et': 'ins_pro_et', 'ins_pro__1': 'ins_pro__1', });
lyr_PPR_136.set('fieldAliases', {'code_pp': 'code_pp', 'source': 'source', 'precision': 'precision', 'qualite': 'qualite', 'siren_ars': 'siren_ars', 'diffusion': 'diffusion', '_edit_date': '_edit_date', 'projet': 'projet', 'psv_code': 'psv_code', 'code_ins': 'code_ins', 'ins_cap_re': 'ins_cap_re', 'ins_pro_et': 'ins_pro_et', 'ins_pro__1': 'ins_pro__1', });
lyr_Fortspubliques_137.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', });
lyr_Haies_138.set('fieldAliases', {'ID': 'ID', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'HAUTEUR': 'HAUTEUR', 'LARGEUR': 'LARGEUR', 'SOURCES': 'SOURCES', 'ID_SOURCES': 'ID_SOURCES', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', });
lyr_Trononshydrographiques_139.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'POS_SOL': 'POS_SOL', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'DELIMIT': 'DELIMIT', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'IPE': 'IPE', 'ID_IPE': 'ID_IPE', 'ID_C_EAU': 'ID_C_EAU', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Surfaceshydrographiques_140.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Dtailshydrographiques_141.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'PERSISTANC': 'PERSISTANC', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ID_BAN': 'ID_BAN', });
lyr_MaresPRAM_142.set('fieldAliases', {'_uid_': '_uid_', 'l_id': 'l_id', 'l_idstrp': 'l_idstrp', 'date_local': 'date_local', 'statut_mar': 'statut_mar', 'type_m': 'type_m', });
lyr_Bassinversanttopographique_143.set('fieldAliases', {'ID_C_EAU': 'ID_C_EAU', 'CODE_CARTH': 'CODE_CARTH', 'CODE_BH': 'CODE_BH', 'COMMENT': 'COMMENT', 'ORIGINE': 'ORIGINE', 'B_FLUVIAL': 'B_FLUVIAL', 'STATUT': 'STATUT', 'SRC_COORD': 'SRC_COORD', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_PLANI': 'ACQU_PLANI', 'ID_SOURCE': 'ID_SOURCE', 'SOURCE': 'SOURCE', 'DATE_CONF': 'DATE_CONF', 'DATE_APP': 'DATE_APP', 'DATE_MAJ': 'DATE_MAJ', 'DATE_CREAT': 'DATE_CREAT', 'BASS_HYDRO': 'BASS_HYDRO', 'TOPONYME': 'TOPONYME', 'CODE_HYDRO': 'CODE_HYDRO', 'ID': 'ID', });
lyr_Toponymiehydrographie_144.set('fieldAliases', {'ID': 'ID', 'CLASSE': 'CLASSE', 'NATURE': 'NATURE', 'GRAPHIE': 'GRAPHIE', 'SOURCE': 'SOURCE', 'STATUT_TOP': 'STATUT_TOP', 'DATE_TOP': 'DATE_TOP', 'LANGUE': 'LANGUE', });
lyr_ZPPAGournayenBrayZone2_145.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_ZPPAGournayenBrayZone1_146.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', 'layer': 'layer', 'path': 'path', });
lyr_Sitesauxabords_147.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_SUPMH_148.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_SPR_149.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_Sitesclasss_150.set('fieldAliases', {'idsite': 'idsite', 'idintgest': 'idintgest', 'dep': 'dep', 'nomsite': 'nomsite', 'type': 'type', 'descriptio': 'descriptio', 'nature': 'nature', 'datedecis': 'datedecis', 'datedecisr': 'datedecisr', 'surfoffic': 'surfoffic', 'echnum': 'echnum', 'precision': 'precision', 'srcgeogen': 'srcgeogen', 'datesrcgen': 'datesrcgen', 'surfcalc': 'surfcalc', 'surfmer': 'surfmer', 'urlfiche': 'urlfiche', 'urltxtrgl': 'urltxtrgl', 'urlcarte': 'urlcarte', 'urlcartec': 'urlcartec', 'urlweb': 'urlweb', 'urlcarmen': 'urlcarmen', });
lyr_Sitesinscrits_151.set('fieldAliases', {'idsite': 'idsite', 'idintgest': 'idintgest', 'dep': 'dep', 'nomsite': 'nomsite', 'type': 'type', 'descriptio': 'descriptio', 'nature': 'nature', 'datedecis': 'datedecis', 'datedecisr': 'datedecisr', 'surfoffic': 'surfoffic', 'echnum': 'echnum', 'precision': 'precision', 'srcgeogen': 'srcgeogen', 'datesrcgen': 'datesrcgen', 'surfcalc': 'surfcalc', 'surfmer': 'surfmer', 'urlfiche': 'urlfiche', 'urltxtrgl': 'urltxtrgl', 'urlcarte': 'urlcarte', 'urlcartec': 'urlcartec', 'urlweb': 'urlweb', 'urlcarmen': 'urlcarmen', });
lyr_Immeubles_152.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_ZPPAindiffrencies_153.set('fieldAliases', {'EA_NATCODE': 'EA_NATCODE', 'COMMUNE_PP': 'COMMUNE_PP', 'NUMORDRE': 'NUMORDRE', 'NUMERO': 'NUMERO', 'NUMERO_DRA': 'NUMERO_DRA', 'NOMUSUEL': 'NOMUSUEL', 'LIEU_IGN': 'LIEU_IGN', 'LIEU_CADAS': 'LIEU_CADAS', 'VESTIGES': 'VESTIGES', 'NATURE_VES': 'NATURE_VES', 'CHRONO_DEB': 'CHRONO_DEB', 'CHRONO_FIN': 'CHRONO_FIN', 'CHRONO_FOU': 'CHRONO_FOU', 'CHRONO_DOU': 'CHRONO_DOU', 'CHRONO_PER': 'CHRONO_PER', 'COMMENT_CH': 'COMMENT_CH', 'NUMERIQUE_': 'NUMERIQUE_', 'NUMERIQU_1': 'NUMERIQU_1', 'CHRONO_D_1': 'CHRONO_D_1', 'X_SAISI': 'X_SAISI', 'Y_SAISI': 'Y_SAISI', 'SURFACE': 'SURFACE', 'PARCELLES': 'PARCELLES', 'INVENTEUR': 'INVENTEUR', 'ANNEE_DECO': 'ANNEE_DECO', 'X_DEGRE': 'X_DEGRE', 'Y_DEGRE': 'Y_DEGRE', 'EMPRISE': 'EMPRISE', 'GEOREFEREN': 'GEOREFEREN', 'GEOMETRIE': 'GEOMETRIE', });
lyr_ZPPAindiffrenciescentrodes_154.set('fieldAliases', {'EA_NATCODE': 'EA_NATCODE', 'COMMUNE_PP': 'COMMUNE_PP', 'NUMORDRE': 'NUMORDRE', 'NUMERO': 'NUMERO', 'NUMERO_DRA': 'NUMERO_DRA', 'NOMUSUEL': 'NOMUSUEL', 'LIEU_IGN': 'LIEU_IGN', 'LIEU_CADAS': 'LIEU_CADAS', 'VESTIGES': 'VESTIGES', 'NATURE_VES': 'NATURE_VES', 'CHRONO_DEB': 'CHRONO_DEB', 'CHRONO_FIN': 'CHRONO_FIN', 'CHRONO_FOU': 'CHRONO_FOU', 'CHRONO_DOU': 'CHRONO_DOU', 'CHRONO_PER': 'CHRONO_PER', 'COMMENT_CH': 'COMMENT_CH', 'NUMERIQUE_': 'NUMERIQUE_', 'NUMERIQU_1': 'NUMERIQU_1', 'CHRONO_D_1': 'CHRONO_D_1', 'X_SAISI': 'X_SAISI', 'Y_SAISI': 'Y_SAISI', 'SURFACE': 'SURFACE', 'PARCELLES': 'PARCELLES', 'INVENTEUR': 'INVENTEUR', 'ANNEE_DECO': 'ANNEE_DECO', 'X_DEGRE': 'X_DEGRE', 'Y_DEGRE': 'Y_DEGRE', 'EMPRISE': 'EMPRISE', 'GEOREFEREN': 'GEOREFEREN', 'GEOMETRIE': 'GEOMETRIE', });
lyr_RoutesconcdesTypeC_155.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'VALIDEFIN': 'VALIDEFIN', 'LEG_SANEF': 'LEG_SANEF', });
lyr_RoutesconcdesTypeA_156.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'VALIDEDEB': 'VALIDEDEB', 'VALIDEFIN': 'VALIDEFIN', 'LEGENDPROD': 'LEGENDPROD', });
lyr_RoutesTypeC_157.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'UUEID': 'UUEID', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'INDICETYPE': 'INDICETYPE', 'VALIDEDEB': 'VALIDEDEB', 'VALIDEFIN': 'VALIDEFIN', });
lyr_RoutesTypeA_158.set('fieldAliases', {'IDZONBRUIT': 'IDZONBRUIT', 'IDCBS': 'IDCBS', 'UUEID': 'UUEID', 'ANNEE': 'ANNEE', 'CODEDEPT': 'CODEDEPT', 'TYPETERR': 'TYPETERR', 'PRODUCTEUR': 'PRODUCTEUR', 'CODINFRA': 'CODINFRA', 'TYPESOURCE': 'TYPESOURCE', 'CBSTYPE': 'CBSTYPE', 'ZONEDEF': 'ZONEDEF', 'LEGENDE': 'LEGENDE', 'INDICETYPE': 'INDICETYPE', 'VALIDEDEB': 'VALIDEDEB', 'VALIDEFIN': 'VALIDEFIN', });
lyr_Canalisationshydrocarbures_159.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_CanalisationsgazGRT_160.set('fieldAliases', {'object_id': 'object_id', 'nom_region': 'nom_region', 'departemen': 'departemen', });
lyr_CanalisationsgazGRDF_161.set('fieldAliases', {'etat_serv': 'etat_serv', 'insee_comm': 'insee_comm', 'commune_ad': 'commune_ad', 'code_depar': 'code_depar', 'departemen': 'departemen', 'region_adm': 'region_adm', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_LignesbassetensionsouterrainesENEDIS_162.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LignesbassetensionariennesENEDIS_163.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LigneshautetensionsouterrainesENEDIS_164.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LigneshautetensionariennesENEDIS_165.set('fieldAliases', {'code_commu': 'code_commu', 'nom_commun': 'nom_commun', 'code_epci': 'code_epci', 'nom_epci': 'nom_epci', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', });
lyr_LigneshautetensionRTE_166.set('fieldAliases', {'ID': 'ID', 'VOLTAGE': 'VOLTAGE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Postesdetransformation_167.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Itinraireautre_168.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', });
lyr_Voieferre_169.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'ELECTRIFIE': 'ELECTRIFIE', 'LARGEUR': 'LARGEUR', 'NB_VOIES': 'NB_VOIES', 'USAGE': 'USAGE', 'VITES_MAX': 'VITES_MAX', 'ID_VFN': 'ID_VFN', 'TOPONYME': 'TOPONYME', });
lyr_RoutesdeGrandeCirculation_170.set('fieldAliases', {'objectid': 'objectid', 'axe': 'axe', 'cumuld': 'cumuld', 'cumulf': 'cumulf', 'plod': 'plod', 'absd': 'absd', 'plof': 'plof', 'absf': 'absf', 'xd': 'xd', 'yd': 'yd', 'zd': 'zd', 'xf': 'xf', 'yf': 'yf', 'zf': 'zf', 'cote': 'cote', 'emplacemen': 'emplacemen', 'voie': 'voie', 'distance': 'distance', 'accrochage': 'accrochage', 'objetid': 'objetid', 'longueur': 'longueur', 'releve_xy': 'releve_xy', 'parent_id': 'parent_id', 'validation': 'validation', 'status': 'status', 'link_id': 'link_id', 'import': 'import', 'user_creat': 'user_creat', 'date_creat': 'date_creat', 'user_modif': 'user_modif', 'date_modif': 'date_modif', 'territoire': 'territoire', 'daterefere': 'daterefere', 'chaussee': 'chaussee', 'id_prj': 'id_prj', 'date_grde_': 'date_grde_', 'grande_cir': 'grande_cir', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Routesnumrotesounommes_171.set('fieldAliases', {'ID': 'ID', 'TYPE_ROUTE': 'TYPE_ROUTE', 'NUMERO': 'NUMERO', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'GESTION': 'GESTION', });
lyr_Niveaudurisque_172.set('fieldAliases', {'dpt': 'dpt', 'niveau': 'niveau', 'alea': 'alea', });
lyr_Zonesdalas_173.set('fieldAliases', {'ID_ZONE': 'ID_ZONE', 'ID_GASPAR': 'ID_GASPAR', 'DESCRIPT': 'DESCRIPT', 'CODERISQUE': 'CODERISQUE', 'NOMRISQUE': 'NOMRISQUE', 'NIVALEA': 'NIVALEA', 'NIVALEA_ST': 'NIVALEA_ST', 'TITRECARTE': 'TITRECARTE', 'DATECARTE': 'DATECARTE', 'ID_MAP': 'ID_MAP', });
lyr_Zonesrglementaires_174.set('fieldAliases', {'id': 'id', 'id_map': 'id_map', 'id_zone': 'id_zone', 'id_gaspar': 'id_gaspar', 'nom': 'nom', 'codezone': 'codezone', 'soumisalea': 'soumisalea', 'typereg': 'typereg', });
lyr_Ruissellement_175.set('fieldAliases', {'id': 'id', 'id_map': 'id_map', 'id_zone': 'id_zone', 'id_gaspar': 'id_gaspar', 'nom': 'nom', 'codezone': 'codezone', 'soumisalea': 'soumisalea', 'typereg': 'typereg', });
lyr_Secteurs_176.set('fieldAliases', {'ALEA': 'ALEA', });
lyr_ICPE_177.set('fieldAliases', {'code_aiot': 'code_aiot', 'x': 'x', 'y': 'y', 'code_epsg': 'code_epsg', 'nom_ets': 'nom_ets', 'num_dep': 'num_dep', 'adresse': 'adresse', 'cd_insee': 'cd_insee', 'cd_postal': 'cd_postal', 'commune': 'commune', 'code_naf': 'code_naf', 'lib_naf': 'lib_naf', 'num_siret': 'num_siret', 'cd_regime': 'cd_regime', 'lib_regime': 'lib_regime', 'seveso': 'seveso', 'lib_seveso': 'lib_seveso', 'bovins': 'bovins', 'porcs': 'porcs', 'volailles': 'volailles', 'carriere': 'carriere', 'eolienne': 'eolienne', 'industrie': 'industrie', 'ied': 'ied', 'priorite_n': 'priorite_n', 'url_fiche': 'url_fiche', });
lyr_SitesBASOL_178.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_etab': 'nom_etab', 'nom_instr': 'nom_instr', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_Sitespollus_179.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_ets': 'nom_ets', 'nom_site': 'nom_site', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_Zonesimpermables_180.set('fieldAliases', {'Id': 'Id', });
lyr_Remontesdenappes_181.set('fieldAliases', {'CLASSE': 'CLASSE', 'FIAB_MNT': 'FIAB_MNT', 'FIAB_ESO': 'FIAB_ESO', 'FIAB_TOT': 'FIAB_TOT', 'CLASSEFIAB': 'CLASSEFIAB', 'gridcode': 'gridcode', });
lyr_ZNIEFFtype2_182.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_ZNIEFFtype1_183.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_Zoneshumides_184.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_Natura2000_185.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', });
lyr_Cimetire_186.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Rservoir_187.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'HAUTEUR': 'HAUTEUR', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'VOLUME': 'VOLUME', });
lyr_Terraindesport_188.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Monument_189.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Indiffrenci_190.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Industrielagricoleoucommercial_191.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Constructionsponctuelles_192.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_Pylne_193.set('fieldAliases', {'ID': 'ID', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_CCdes4Rivires_194.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CCBrayEawy_195.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_CCdeLondinieres_196.set('fieldAliases', {'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Parcellescadastrales_197.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', 'layer': 'layer', 'path': 'path', });
lyr_Communesassociesoudlgues_198.set('fieldAliases', {'ID': 'ID', 'INSEE_CAD': 'INSEE_CAD', 'INSEE_COM': 'INSEE_COM', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'POPULATION': 'POPULATION', 'CODE_SIREN': 'CODE_SIREN', });
lyr_CommunesadhrentesADS_199.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Communes_200.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Nomdescommunes_201.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
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
lyr_Secteurs_32.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_33.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_34.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_35.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_36.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_37.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_38.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_39.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_40.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_41.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_42.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_43.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_44.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques2_45.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionssurfaciques1_46.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaire_47.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_48.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_49.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_50.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_51.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_52.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_53.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_54.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_55.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_56.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_57.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_58.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'url_rglmt': 'TextEdit', 'shape_peri': 'TextEdit', });
lyr_Prescriptionssurfaciques_59.set('fieldImages', {'objectid': 'Range', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'txt': 'TextEdit', 'typepsc': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'URL_RGLMT': 'TextEdit', 'largeur': 'Range', 'num_p_com': 'Range', 'benef': 'TextEdit', 'Vocation': 'TextEdit', });
lyr_Prescriptionslinaires_60.set('fieldImages', {});
lyr_Prescriptionsponctuelles_61.set('fieldImages', {'objectid': 'Range', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'txt': 'TextEdit', 'typepsc': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'URL_RGLMT': 'TextEdit', });
lyr_Codessecteurs_62.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id_docurba': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'datvalid': 'TextEdit', 'datappro': 'TextEdit', 'insee': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'url_rglmt': 'TextEdit', 'shape_peri': 'TextEdit', });
lyr_Secteurs_63.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_64.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_65.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_66.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_67.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_68.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_69.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_70.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_71.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_72.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques2_73.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'STYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'IDURBA': 'TextEdit', });
lyr_Prescriptionssurfaciques1_74.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Ruissellement_75.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'STYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFICH': 'TextEdit', 'IDURBA': 'TextEdit', });
lyr_Prescriptionslinaires_76.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_77.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_78.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_79.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_80.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_81.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionssurfaciques_82.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionslinaires_83.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionsponctuelles_84.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Codessecteurs_85.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_86.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_87.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_88.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Espaceboisclass_89.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_90.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_91.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Bois_92.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_93.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_94.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Droitdepremption_95.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_96.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_97.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_DroitdePremption_98.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_99.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_100.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_DroitdePremptionurbain_101.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionssurfaciques_102.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_103.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_104.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_105.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_106.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_107.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_108.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_109.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionslinaires_110.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionsponctuelles_111.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_112.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_113.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_114.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_115.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_116.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_117.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_118.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_119.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionslinaires_120.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Prescriptionsponctuelles_121.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEINF': 'TextEdit', 'TYPEP': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Codessecteurs_122.set('fieldImages', {'LIBELLE': 'TextEdit', 'TYPESECT': 'TextEdit', 'FERMRECO': 'TextEdit', 'DESTDOMI': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'INSEE': 'TextEdit', 'DATAPPRO': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Corpsdeferme_123.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'REALISATIO': '', 'DATE': 'DateTime', 'NUM_EXPLOI': '', 'num_expl_1': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'TYPE_DOS_2': '', 'PRECISION': 'TextEdit', 'AD_SMT': 'TextEdit', 'AD_BAF': 'TextEdit', 'TYPO_CDF': 'TextEdit', 'STATUT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Distancedereculautourdubti_124.set('fieldImages', {'NOM_EXPLOI': 'TextEdit', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': 'TextEdit', 'SOUS_TYPE_': 'TextEdit', 'LIBELLE_TY': 'TextEdit', 'TYPE_DOSSI': 'TextEdit', 'TYPE_DOS_1': 'TextEdit', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': 'TextEdit', });
lyr_Btiagricole_125.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': '', 'SOUS_TYPE_': '', 'LIBELLE_TY': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': '', });
lyr_Primtredeprotectionincendie100m_126.set('fieldImages', {'ID': 'Range', });
lyr_Primtredeprotectionincendie15m_127.set('fieldImages', {'ID': 'Range', });
lyr_lotsanonymesPAC_128.set('fieldImages', {'NUM_ILOTS': 'TextEdit', 'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'COMMUNE': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'S_CADASTRA': '', 'S_CALC_MAP': '', });
lyr_Corpsdeferme_129.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'REALISATIO': '', 'DATE': 'DateTime', 'NUM_EXPLOI': '', 'num_expl_1': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'TYPE_DOS_2': '', 'PRECISION': 'TextEdit', 'AD_SMT': 'TextEdit', 'AD_BAF': 'TextEdit', 'TYPO_CDF': 'TextEdit', 'STATUT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Distancedereculautourdubti_130.set('fieldImages', {'NOM_EXPLOI': 'TextEdit', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': 'TextEdit', 'SOUS_TYPE_': 'TextEdit', 'LIBELLE_TY': 'TextEdit', 'TYPE_DOSSI': 'TextEdit', 'TYPE_DOS_1': 'TextEdit', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': 'TextEdit', });
lyr_Btiagricole_131.set('fieldImages', {'NOM_EXPLOI': '', 'NUM_PACAGE': 'TextEdit', 'NUM_SIREN': 'TextEdit', 'NOM_COMMUN': '', 'CODE_INSEE': 'TextEdit', 'TYPE_BATIM': '', 'SOUS_TYPE_': '', 'LIBELLE_TY': '', 'TYPE_DOSSI': '', 'TYPE_DOS_1': '', 'surf': 'TextEdit', 'STATUT': 'TextEdit', 'PERIMETRE_': '', });
lyr_Zonedactivitetdeservice_132.set('fieldImages', {'ID': 'TextEdit', 'CATEGORIE': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ID_BAN': 'TextEdit', 'NOMCOMMERC': 'TextEdit', });
lyr_ERP_133.set('fieldImages', {'ID': 'TextEdit', 'ID_REF': 'TextEdit', 'CATEGORIE': 'TextEdit', 'TYPE_1': 'TextEdit', 'TYPE_2': 'TextEdit', 'ACTIV_1': 'TextEdit', 'ACTIV_2': 'TextEdit', 'LIBELLE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PUBLIC': 'TextEdit', 'OUVERT': 'TextEdit', 'CAP_ACC': 'Range', 'CAP_HEBERG': 'Range', 'ORIGIN_GEO': 'TextEdit', 'TYPE_LOC': 'TextEdit', 'VALID_IGN': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'SIRET': 'TextEdit', 'ADR_NUMERO': 'TextEdit', 'ADR_REP': 'TextEdit', 'ADR_COMPL': 'TextEdit', 'ADR_NOM_1': 'TextEdit', 'ADR_NOM_2': 'TextEdit', 'CODE_POST': 'TextEdit', 'ID_BATI': 'TextEdit', 'ID_ENCEINT': 'TextEdit', });
lyr_PPE_134.set('fieldImages', {'code_pp': 'TextEdit', 'source': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'siren_ars': 'TextEdit', 'diffusion': 'TextEdit', '_edit_date': 'DateTime', 'projet': 'TextEdit', 'psv_code': 'TextEdit', 'code_ins': 'TextEdit', 'ins_cap_re': 'TextEdit', 'ins_pro_et': 'TextEdit', 'ins_pro__1': 'TextEdit', });
lyr_PPI_135.set('fieldImages', {'code_pp': 'TextEdit', 'source': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'siren_ars': 'TextEdit', 'diffusion': 'TextEdit', '_edit_date': 'DateTime', 'projet': 'TextEdit', 'psv_code': 'TextEdit', 'code_ins': 'TextEdit', 'ins_cap_re': 'TextEdit', 'ins_pro_et': 'TextEdit', 'ins_pro__1': 'TextEdit', });
lyr_PPR_136.set('fieldImages', {'code_pp': 'TextEdit', 'source': 'TextEdit', 'precision': 'TextEdit', 'qualite': 'TextEdit', 'siren_ars': 'TextEdit', 'diffusion': 'TextEdit', '_edit_date': 'DateTime', 'projet': 'TextEdit', 'psv_code': 'TextEdit', 'code_ins': 'TextEdit', 'ins_cap_re': 'TextEdit', 'ins_pro_et': 'TextEdit', 'ins_pro__1': 'TextEdit', });
lyr_Fortspubliques_137.set('fieldImages', {'ID': '', 'NATURE': '', 'TOPONYME': '', 'STATUT_TOP': '', 'IMPORTANCE': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', });
lyr_Haies_138.set('fieldImages', {'ID': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'HAUTEUR': 'Range', 'LARGEUR': 'Range', 'SOURCES': 'TextEdit', 'ID_SOURCES': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', });
lyr_Trononshydrographiques_139.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'POS_SOL': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'FOSSE': 'TextEdit', 'NAVIGABL': 'TextEdit', 'SALINITE': 'TextEdit', 'NUM_ORDRE': 'TextEdit', 'CLA_ORDRE': 'TextEdit', 'ORIGINE': 'TextEdit', 'PER_ORDRE': 'TextEdit', 'SENS_ECOUL': 'TextEdit', 'RES_COULAN': 'TextEdit', 'DELIMIT': 'TextEdit', 'LARGEUR': 'TextEdit', 'BRAS': 'TextEdit', 'COMMENT': 'TextEdit', 'CODE_CARTH': 'TextEdit', 'IPE': 'TextEdit', 'ID_IPE': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_S_HYDRO': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_Surfaceshydrographiques_140.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'SALINITE': 'TextEdit', 'ORIGINE': 'TextEdit', 'COMMENT': 'TextEdit', 'ID_P_EAU': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_P_EAU': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_Dtailshydrographiques_141.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'PERSISTANC': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ID_BAN': 'TextEdit', });
lyr_MaresPRAM_142.set('fieldImages', {'_uid_': 'TextEdit', 'l_id': 'TextEdit', 'l_idstrp': 'TextEdit', 'date_local': 'TextEdit', 'statut_mar': 'TextEdit', 'type_m': 'TextEdit', });
lyr_Bassinversanttopographique_143.set('fieldImages', {'ID_C_EAU': '', 'CODE_CARTH': '', 'CODE_BH': '', 'COMMENT': '', 'ORIGINE': '', 'B_FLUVIAL': '', 'STATUT': '', 'SRC_COORD': '', 'PREC_PLANI': '', 'ACQU_PLANI': '', 'ID_SOURCE': '', 'SOURCE': '', 'DATE_CONF': '', 'DATE_APP': '', 'DATE_MAJ': '', 'DATE_CREAT': '', 'BASS_HYDRO': '', 'TOPONYME': '', 'CODE_HYDRO': '', 'ID': '', });
lyr_Toponymiehydrographie_144.set('fieldImages', {'ID': 'TextEdit', 'CLASSE': 'TextEdit', 'NATURE': 'TextEdit', 'GRAPHIE': 'TextEdit', 'SOURCE': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_TOP': 'DateTime', 'LANGUE': 'TextEdit', });
lyr_ZPPAGournayenBrayZone2_145.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ZPPAGournayenBrayZone1_146.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Sitesauxabords_147.set('fieldImages', {'idTigre': 'TextEdit', 'idApp': 'TextEdit', 'appTigre': 'TextEdit', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_SUPMH_148.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_SPR_149.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_Sitesclasss_150.set('fieldImages', {'idsite': 'TextEdit', 'idintgest': 'TextEdit', 'dep': 'TextEdit', 'nomsite': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'nature': 'TextEdit', 'datedecis': 'TextEdit', 'datedecisr': 'TextEdit', 'surfoffic': 'TextEdit', 'echnum': 'TextEdit', 'precision': 'TextEdit', 'srcgeogen': 'TextEdit', 'datesrcgen': 'TextEdit', 'surfcalc': 'TextEdit', 'surfmer': 'TextEdit', 'urlfiche': 'TextEdit', 'urltxtrgl': 'TextEdit', 'urlcarte': 'TextEdit', 'urlcartec': 'TextEdit', 'urlweb': 'TextEdit', 'urlcarmen': 'TextEdit', });
lyr_Sitesinscrits_151.set('fieldImages', {'idsite': 'TextEdit', 'idintgest': 'TextEdit', 'dep': 'TextEdit', 'nomsite': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'nature': 'TextEdit', 'datedecis': 'TextEdit', 'datedecisr': 'TextEdit', 'surfoffic': 'TextEdit', 'echnum': 'TextEdit', 'precision': 'TextEdit', 'srcgeogen': 'TextEdit', 'datesrcgen': 'TextEdit', 'surfcalc': 'TextEdit', 'surfmer': 'TextEdit', 'urlfiche': 'TextEdit', 'urltxtrgl': 'TextEdit', 'urlcarte': 'TextEdit', 'urlcartec': 'TextEdit', 'urlweb': 'TextEdit', 'urlcarmen': 'TextEdit', });
lyr_Immeubles_152.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_ZPPAindiffrencies_153.set('fieldImages', {'EA_NATCODE': 'TextEdit', 'COMMUNE_PP': 'TextEdit', 'NUMORDRE': 'Range', 'NUMERO': 'TextEdit', 'NUMERO_DRA': 'TextEdit', 'NOMUSUEL': 'TextEdit', 'LIEU_IGN': 'TextEdit', 'LIEU_CADAS': 'TextEdit', 'VESTIGES': 'TextEdit', 'NATURE_VES': 'TextEdit', 'CHRONO_DEB': 'TextEdit', 'CHRONO_FIN': 'TextEdit', 'CHRONO_FOU': 'TextEdit', 'CHRONO_DOU': 'TextEdit', 'CHRONO_PER': 'TextEdit', 'COMMENT_CH': 'TextEdit', 'NUMERIQUE_': 'TextEdit', 'NUMERIQU_1': 'TextEdit', 'CHRONO_D_1': 'TextEdit', 'X_SAISI': 'TextEdit', 'Y_SAISI': 'TextEdit', 'SURFACE': 'TextEdit', 'PARCELLES': 'TextEdit', 'INVENTEUR': 'TextEdit', 'ANNEE_DECO': 'Range', 'X_DEGRE': 'TextEdit', 'Y_DEGRE': 'TextEdit', 'EMPRISE': 'TextEdit', 'GEOREFEREN': 'TextEdit', 'GEOMETRIE': 'TextEdit', });
lyr_ZPPAindiffrenciescentrodes_154.set('fieldImages', {'EA_NATCODE': 'TextEdit', 'COMMUNE_PP': 'TextEdit', 'NUMORDRE': 'Range', 'NUMERO': 'TextEdit', 'NUMERO_DRA': 'TextEdit', 'NOMUSUEL': 'TextEdit', 'LIEU_IGN': 'TextEdit', 'LIEU_CADAS': 'TextEdit', 'VESTIGES': 'TextEdit', 'NATURE_VES': 'TextEdit', 'CHRONO_DEB': 'TextEdit', 'CHRONO_FIN': 'TextEdit', 'CHRONO_FOU': 'TextEdit', 'CHRONO_DOU': 'TextEdit', 'CHRONO_PER': 'TextEdit', 'COMMENT_CH': 'TextEdit', 'NUMERIQUE_': 'TextEdit', 'NUMERIQU_1': 'TextEdit', 'CHRONO_D_1': 'TextEdit', 'X_SAISI': 'TextEdit', 'Y_SAISI': 'TextEdit', 'SURFACE': 'TextEdit', 'PARCELLES': 'TextEdit', 'INVENTEUR': 'TextEdit', 'ANNEE_DECO': 'Range', 'X_DEGRE': 'TextEdit', 'Y_DEGRE': 'TextEdit', 'EMPRISE': 'TextEdit', 'GEOREFEREN': 'TextEdit', 'GEOMETRIE': 'TextEdit', });
lyr_RoutesconcdesTypeC_155.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'VALIDEFIN': 'DateTime', 'LEG_SANEF': 'TextEdit', });
lyr_RoutesconcdesTypeA_156.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'VALIDEDEB': 'DateTime', 'VALIDEFIN': 'DateTime', 'LEGENDPROD': 'TextEdit', });
lyr_RoutesTypeC_157.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'UUEID': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'INDICETYPE': 'TextEdit', 'VALIDEDEB': 'DateTime', 'VALIDEFIN': 'DateTime', });
lyr_RoutesTypeA_158.set('fieldImages', {'IDZONBRUIT': 'TextEdit', 'IDCBS': 'TextEdit', 'UUEID': 'TextEdit', 'ANNEE': 'TextEdit', 'CODEDEPT': 'TextEdit', 'TYPETERR': 'TextEdit', 'PRODUCTEUR': 'TextEdit', 'CODINFRA': 'TextEdit', 'TYPESOURCE': 'TextEdit', 'CBSTYPE': 'TextEdit', 'ZONEDEF': 'TextEdit', 'LEGENDE': 'TextEdit', 'INDICETYPE': 'TextEdit', 'VALIDEDEB': 'DateTime', 'VALIDEFIN': 'DateTime', });
lyr_Canalisationshydrocarbures_159.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_CanalisationsgazGRT_160.set('fieldImages', {'object_id': 'TextEdit', 'nom_region': 'TextEdit', 'departemen': 'TextEdit', });
lyr_CanalisationsgazGRDF_161.set('fieldImages', {'etat_serv': 'TextEdit', 'insee_comm': 'TextEdit', 'commune_ad': 'TextEdit', 'code_depar': 'TextEdit', 'departemen': 'TextEdit', 'region_adm': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LignesbassetensionsouterrainesENEDIS_162.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LignesbassetensionariennesENEDIS_163.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LigneshautetensionsouterrainesENEDIS_164.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LigneshautetensionariennesENEDIS_165.set('fieldImages', {'code_commu': '', 'nom_commun': '', 'code_epci': 'TextEdit', 'nom_epci': 'TextEdit', 'code_depar': '', 'nom_depart': '', 'code_regio': '', 'nom_region': 'TextEdit', });
lyr_LigneshautetensionRTE_166.set('fieldImages', {'ID': 'TextEdit', 'VOLTAGE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Postesdetransformation_167.set('fieldImages', {'ID': '', 'TOPONYME': '', 'STATUT_TOP': '', 'IMPORTANCE': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'ACQU_PLANI': '', 'PREC_PLANI': '', 'ACQU_ALTI': '', 'PREC_ALTI': '', });
lyr_Itinraireautre_168.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', });
lyr_Voieferre_169.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'ELECTRIFIE': 'TextEdit', 'LARGEUR': 'TextEdit', 'NB_VOIES': 'Range', 'USAGE': 'TextEdit', 'VITES_MAX': 'Range', 'ID_VFN': 'TextEdit', 'TOPONYME': 'TextEdit', });
lyr_RoutesdeGrandeCirculation_170.set('fieldImages', {'objectid': 'Range', 'axe': 'TextEdit', 'cumuld': 'Range', 'cumulf': 'Range', 'plod': 'TextEdit', 'absd': 'Range', 'plof': 'TextEdit', 'absf': 'Range', 'xd': 'TextEdit', 'yd': 'TextEdit', 'zd': 'TextEdit', 'xf': 'TextEdit', 'yf': 'TextEdit', 'zf': 'TextEdit', 'cote': 'TextEdit', 'emplacemen': 'TextEdit', 'voie': 'Range', 'distance': 'TextEdit', 'accrochage': 'Range', 'objetid': 'Range', 'longueur': 'TextEdit', 'releve_xy': 'TextEdit', 'parent_id': 'Range', 'validation': 'Range', 'status': 'Range', 'link_id': 'Range', 'import': 'Range', 'user_creat': 'TextEdit', 'date_creat': 'DateTime', 'user_modif': 'TextEdit', 'date_modif': 'DateTime', 'territoire': 'TextEdit', 'daterefere': 'DateTime', 'chaussee': 'TextEdit', 'id_prj': 'Range', 'date_grde_': 'Range', 'grande_cir': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Routesnumrotesounommes_171.set('fieldImages', {'ID': 'TextEdit', 'TYPE_ROUTE': 'TextEdit', 'NUMERO': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'GESTION': 'TextEdit', });
lyr_Niveaudurisque_172.set('fieldImages', {'dpt': '', 'niveau': '', 'alea': '', });
lyr_Zonesdalas_173.set('fieldImages', {'ID_ZONE': 'TextEdit', 'ID_GASPAR': 'TextEdit', 'DESCRIPT': 'TextEdit', 'CODERISQUE': 'TextEdit', 'NOMRISQUE': 'TextEdit', 'NIVALEA': 'TextEdit', 'NIVALEA_ST': 'TextEdit', 'TITRECARTE': 'TextEdit', 'DATECARTE': 'TextEdit', 'ID_MAP': 'TextEdit', });
lyr_Zonesrglementaires_174.set('fieldImages', {'id': 'TextEdit', 'id_map': 'TextEdit', 'id_zone': 'TextEdit', 'id_gaspar': 'TextEdit', 'nom': 'TextEdit', 'codezone': 'TextEdit', 'soumisalea': 'TextEdit', 'typereg': 'TextEdit', });
lyr_Ruissellement_175.set('fieldImages', {'id': 'TextEdit', 'id_map': 'TextEdit', 'id_zone': 'TextEdit', 'id_gaspar': 'TextEdit', 'nom': 'TextEdit', 'codezone': 'TextEdit', 'soumisalea': 'TextEdit', 'typereg': 'TextEdit', });
lyr_Secteurs_176.set('fieldImages', {'ALEA': 'Range', });
lyr_ICPE_177.set('fieldImages', {'code_aiot': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'code_epsg': 'TextEdit', 'nom_ets': 'TextEdit', 'num_dep': 'TextEdit', 'adresse': 'TextEdit', 'cd_insee': 'TextEdit', 'cd_postal': 'TextEdit', 'commune': 'TextEdit', 'code_naf': 'TextEdit', 'lib_naf': 'TextEdit', 'num_siret': 'TextEdit', 'cd_regime': 'TextEdit', 'lib_regime': 'TextEdit', 'seveso': 'TextEdit', 'lib_seveso': 'TextEdit', 'bovins': 'TextEdit', 'porcs': 'TextEdit', 'volailles': 'TextEdit', 'carriere': 'TextEdit', 'eolienne': 'TextEdit', 'industrie': 'TextEdit', 'ied': 'TextEdit', 'priorite_n': 'TextEdit', 'url_fiche': 'TextEdit', });
lyr_SitesBASOL_178.set('fieldImages', {'cd_metier': 'TextEdit', 'autre_id': 'TextEdit', 'nom_etab': 'TextEdit', 'nom_instr': 'TextEdit', 'code_siret': 'TextEdit', 'stat_instr': 'TextEdit', 'date_debut': 'DateTime', 'date_fin': 'DateTime', 'descript': 'TextEdit', 'code_insee': 'TextEdit', 'nom_com': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'code_dpt': 'TextEdit', 'nom_dpt': 'TextEdit', 'code_reg': 'TextEdit', 'nom_reg': 'TextEdit', 'act_nafv2': 'TextEdit', 'act_naf': 'TextEdit', 'act_icpe': 'TextEdit', 'act_nafv1': 'TextEdit', });
lyr_Sitespollus_179.set('fieldImages', {'cd_metier': '', 'autre_id': '', 'nom_ets': '', 'nom_site': '', 'code_siret': '', 'stat_instr': '', 'date_debut': '', 'date_fin': '', 'descript': '', 'code_insee': '', 'nom_com': '', 'x_wgs84': '', 'y_wgs84': '', 'code_dpt': '', 'nom_dpt': '', 'code_reg': '', 'nom_reg': '', 'act_nafv2': '', 'act_naf': '', 'act_icpe': '', 'act_nafv1': '', });
lyr_Zonesimpermables_180.set('fieldImages', {'Id': 'TextEdit', });
lyr_Remontesdenappes_181.set('fieldImages', {'CLASSE': 'TextEdit', 'FIAB_MNT': 'TextEdit', 'FIAB_ESO': 'TextEdit', 'FIAB_TOT': 'TextEdit', 'CLASSEFIAB': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_ZNIEFFtype2_182.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_ZNIEFFtype1_183.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Zoneshumides_184.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Natura2000_185.set('fieldImages', {'SITECODE': '', 'SITENAME': '', });
lyr_Cimetire_186.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Rservoir_187.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'VOLUME': 'TextEdit', });
lyr_Terraindesport_188.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Monument_189.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Indiffrenci_190.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Industrielagricoleoucommercial_191.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Constructionsponctuelles_192.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_Pylne_193.set('fieldImages', {'ID': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_CCdes4Rivires_194.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CCBrayEawy_195.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_CCdeLondinieres_196.set('fieldImages', {'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Parcellescadastrales_197.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communesassociesoudlgues_198.set('fieldImages', {'ID': 'TextEdit', 'INSEE_CAD': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'POPULATION': 'Range', 'CODE_SIREN': 'TextEdit', });
lyr_CommunesadhrentesADS_199.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communes_200.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Nomdescommunes_201.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': '', 'path': '', });
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
lyr_Secteurs_32.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_33.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_34.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_35.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_36.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_37.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_38.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_39.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_40.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_41.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_42.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_43.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_44.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'inline label - visible with data', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques2_45.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionssurfaciques1_46.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaire_47.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_48.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_49.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_50.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_51.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_52.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_53.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_54.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_55.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_56.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_57.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_58.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'inline label - visible with data', 'libelong': 'hidden field', 'typezone': 'hidden field', 'destdomi': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'url_rglmt': 'hidden field', 'shape_peri': 'hidden field', });
lyr_Prescriptionssurfaciques_59.set('fieldLabels', {'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'inline label - visible with data', 'txt': 'hidden field', 'typepsc': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', 'URL_RGLMT': 'hidden field', 'largeur': 'hidden field', 'num_p_com': 'hidden field', 'benef': 'hidden field', 'Vocation': 'hidden field', });
lyr_Prescriptionslinaires_60.set('fieldLabels', {});
lyr_Prescriptionsponctuelles_61.set('fieldLabels', {'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'inline label - visible with data', 'txt': 'hidden field', 'typepsc': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'URL_RGLMT': 'hidden field', });
lyr_Codessecteurs_62.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'id_docurba': 'hidden field', 'libelle': 'hidden field', 'libelong': 'hidden field', 'typezone': 'hidden field', 'destdomi': 'hidden field', 'nomfic': 'hidden field', 'urlfic': 'hidden field', 'datvalid': 'hidden field', 'datappro': 'hidden field', 'insee': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'url_rglmt': 'hidden field', 'shape_peri': 'hidden field', });
lyr_Secteurs_63.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_64.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_65.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_66.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_67.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_68.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_69.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_70.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_71.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_72.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques2_73.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'STYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'IDURBA': 'hidden field', });
lyr_Prescriptionssurfaciques1_74.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Ruissellement_75.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'STYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFICH': 'hidden field', 'IDURBA': 'hidden field', });
lyr_Prescriptionslinaires_76.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_77.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_78.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_79.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_80.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_81.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_82.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_83.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_84.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_85.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_86.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_87.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_88.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Espaceboisclass_89.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_90.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_91.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Bois_92.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_93.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_94.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Droitdepremption_95.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_96.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_97.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_DroitdePremption_98.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_99.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_100.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_DroitdePremptionurbain_101.set('fieldLabels', {'LIBELLE': 'hidden field', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionssurfaciques_102.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_103.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_104.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_105.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_106.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_107.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_108.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_109.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionslinaires_110.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionsponctuelles_111.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_112.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_113.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_114.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_115.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_116.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_117.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_118.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_119.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionslinaires_120.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Prescriptionsponctuelles_121.set('fieldLabels', {'LIBELLE': 'inline label - visible with data', 'TXT': 'hidden field', 'TYPEINF': 'hidden field', 'TYPEP': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', });
lyr_Codessecteurs_122.set('fieldLabels', {'LIBELLE': 'hidden field', 'TYPESECT': 'hidden field', 'FERMRECO': 'hidden field', 'DESTDOMI': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'INSEE': 'hidden field', 'DATAPPRO': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Corpsdeferme_123.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'REALISATIO': 'hidden field', 'DATE': 'hidden field', 'NUM_EXPLOI': 'hidden field', 'num_expl_1': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'TYPE_DOS_2': 'hidden field', 'PRECISION': 'hidden field', 'AD_SMT': 'hidden field', 'AD_BAF': 'hidden field', 'TYPO_CDF': 'hidden field', 'STATUT': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Distancedereculautourdubti_124.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Btiagricole_125.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Primtredeprotectionincendie100m_126.set('fieldLabels', {'ID': 'hidden field', });
lyr_Primtredeprotectionincendie15m_127.set('fieldLabels', {'ID': 'hidden field', });
lyr_lotsanonymesPAC_128.set('fieldLabels', {'NUM_ILOTS': 'hidden field', 'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'COMMUNE': 'hidden field', 'CODE_INSEE': 'hidden field', 'S_CADASTRA': 'hidden field', 'S_CALC_MAP': 'hidden field', });
lyr_Corpsdeferme_129.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'REALISATIO': 'hidden field', 'DATE': 'hidden field', 'NUM_EXPLOI': 'hidden field', 'num_expl_1': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'TYPE_DOS_2': 'hidden field', 'PRECISION': 'hidden field', 'AD_SMT': 'hidden field', 'AD_BAF': 'hidden field', 'TYPO_CDF': 'hidden field', 'STATUT': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Distancedereculautourdubti_130.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Btiagricole_131.set('fieldLabels', {'NOM_EXPLOI': 'hidden field', 'NUM_PACAGE': 'hidden field', 'NUM_SIREN': 'hidden field', 'NOM_COMMUN': 'hidden field', 'CODE_INSEE': 'hidden field', 'TYPE_BATIM': 'hidden field', 'SOUS_TYPE_': 'hidden field', 'LIBELLE_TY': 'hidden field', 'TYPE_DOSSI': 'hidden field', 'TYPE_DOS_1': 'hidden field', 'surf': 'hidden field', 'STATUT': 'hidden field', 'PERIMETRE_': 'hidden field', });
lyr_Zonedactivitetdeservice_132.set('fieldLabels', {'ID': 'hidden field', 'CATEGORIE': 'hidden field', 'NATURE': 'hidden field', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'FICTIF': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ID_BAN': 'hidden field', 'NOMCOMMERC': 'hidden field', });
lyr_ERP_133.set('fieldLabels', {'ID': 'hidden field', 'ID_REF': 'hidden field', 'CATEGORIE': 'hidden field', 'TYPE_1': 'hidden field', 'TYPE_2': 'hidden field', 'ACTIV_1': 'hidden field', 'ACTIV_2': 'hidden field', 'LIBELLE': 'inline label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PUBLIC': 'hidden field', 'OUVERT': 'hidden field', 'CAP_ACC': 'hidden field', 'CAP_HEBERG': 'hidden field', 'ORIGIN_GEO': 'hidden field', 'TYPE_LOC': 'hidden field', 'VALID_IGN': 'hidden field', 'CODE_INSEE': 'hidden field', 'SIRET': 'hidden field', 'ADR_NUMERO': 'hidden field', 'ADR_REP': 'hidden field', 'ADR_COMPL': 'hidden field', 'ADR_NOM_1': 'hidden field', 'ADR_NOM_2': 'hidden field', 'CODE_POST': 'hidden field', 'ID_BATI': 'hidden field', 'ID_ENCEINT': 'hidden field', });
lyr_PPE_134.set('fieldLabels', {'code_pp': 'hidden field', 'source': 'hidden field', 'precision': 'hidden field', 'qualite': 'hidden field', 'siren_ars': 'hidden field', 'diffusion': 'hidden field', '_edit_date': 'hidden field', 'projet': 'hidden field', 'psv_code': 'hidden field', 'code_ins': 'hidden field', 'ins_cap_re': 'hidden field', 'ins_pro_et': 'hidden field', 'ins_pro__1': 'hidden field', });
lyr_PPI_135.set('fieldLabels', {'code_pp': 'hidden field', 'source': 'hidden field', 'precision': 'hidden field', 'qualite': 'hidden field', 'siren_ars': 'hidden field', 'diffusion': 'hidden field', '_edit_date': 'hidden field', 'projet': 'hidden field', 'psv_code': 'hidden field', 'code_ins': 'hidden field', 'ins_cap_re': 'hidden field', 'ins_pro_et': 'hidden field', 'ins_pro__1': 'hidden field', });
lyr_PPR_136.set('fieldLabels', {'code_pp': 'hidden field', 'source': 'hidden field', 'precision': 'hidden field', 'qualite': 'hidden field', 'siren_ars': 'hidden field', 'diffusion': 'hidden field', '_edit_date': 'hidden field', 'projet': 'hidden field', 'psv_code': 'hidden field', 'code_ins': 'hidden field', 'ins_cap_re': 'hidden field', 'ins_pro_et': 'hidden field', 'ins_pro__1': 'hidden field', });
lyr_Fortspubliques_137.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', });
lyr_Haies_138.set('fieldLabels', {'ID': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'HAUTEUR': 'hidden field', 'LARGEUR': 'inline label - visible with data', 'SOURCES': 'inline label - visible with data', 'ID_SOURCES': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', });
lyr_Trononshydrographiques_139.set('fieldLabels', {'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'hidden field', 'FICTIF': 'hidden field', 'ETAT': 'hidden field', 'POS_SOL': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'FOSSE': 'hidden field', 'NAVIGABL': 'hidden field', 'SALINITE': 'hidden field', 'NUM_ORDRE': 'hidden field', 'CLA_ORDRE': 'hidden field', 'ORIGINE': 'hidden field', 'PER_ORDRE': 'hidden field', 'SENS_ECOUL': 'hidden field', 'RES_COULAN': 'hidden field', 'DELIMIT': 'hidden field', 'LARGEUR': 'hidden field', 'BRAS': 'hidden field', 'COMMENT': 'hidden field', 'CODE_CARTH': 'hidden field', 'IPE': 'hidden field', 'ID_IPE': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_S_HYDRO': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Surfaceshydrographiques_140.set('fieldLabels', {'ID': 'hidden field', 'CODE_HYDRO': 'hidden field', 'CODE_PAYS': 'hidden field', 'NATURE': 'inline label - visible with data', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'SRC_COORD': 'hidden field', 'SRC_ALTI': 'hidden field', 'STATUT': 'hidden field', 'PERSISTANC': 'hidden field', 'SALINITE': 'hidden field', 'ORIGINE': 'hidden field', 'COMMENT': 'hidden field', 'ID_P_EAU': 'hidden field', 'ID_C_EAU': 'hidden field', 'ID_ENT_TR': 'hidden field', 'NOM_P_EAU': 'hidden field', 'NOM_C_EAU': 'hidden field', 'NOM_ENT_TR': 'hidden field', });
lyr_Dtailshydrographiques_141.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'NAT_DETAIL': 'hidden field', 'PERSISTANC': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ID_BAN': 'hidden field', });
lyr_MaresPRAM_142.set('fieldLabels', {'_uid_': 'hidden field', 'l_id': 'hidden field', 'l_idstrp': 'hidden field', 'date_local': 'hidden field', 'statut_mar': 'hidden field', 'type_m': 'hidden field', });
lyr_Bassinversanttopographique_143.set('fieldLabels', {'ID_C_EAU': 'hidden field', 'CODE_CARTH': 'hidden field', 'CODE_BH': 'hidden field', 'COMMENT': 'hidden field', 'ORIGINE': 'hidden field', 'B_FLUVIAL': 'hidden field', 'STATUT': 'hidden field', 'SRC_COORD': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ID_SOURCE': 'hidden field', 'SOURCE': 'hidden field', 'DATE_CONF': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_CREAT': 'hidden field', 'BASS_HYDRO': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'CODE_HYDRO': 'hidden field', 'ID': 'hidden field', });
lyr_Toponymiehydrographie_144.set('fieldLabels', {'ID': 'hidden field', 'CLASSE': 'hidden field', 'NATURE': 'hidden field', 'GRAPHIE': 'inline label - visible with data', 'SOURCE': 'hidden field', 'STATUT_TOP': 'hidden field', 'DATE_TOP': 'hidden field', 'LANGUE': 'hidden field', });
lyr_ZPPAGournayenBrayZone2_145.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ZPPAGournayenBrayZone1_146.set('fieldLabels', {'id': 'hidden field', 'commune': 'hidden field', 'prefixe': 'hidden field', 'section': 'hidden field', 'numero': 'hidden field', 'contenance': 'hidden field', 'created': 'hidden field', 'updated': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Sitesauxabords_147.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_SUPMH_148.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - always visible', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_SPR_149.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_Sitesclasss_150.set('fieldLabels', {'idsite': 'hidden field', 'idintgest': 'hidden field', 'dep': 'hidden field', 'nomsite': 'inline label - visible with data', 'type': 'hidden field', 'descriptio': 'hidden field', 'nature': 'hidden field', 'datedecis': 'hidden field', 'datedecisr': 'hidden field', 'surfoffic': 'hidden field', 'echnum': 'hidden field', 'precision': 'hidden field', 'srcgeogen': 'hidden field', 'datesrcgen': 'hidden field', 'surfcalc': 'hidden field', 'surfmer': 'hidden field', 'urlfiche': 'hidden field', 'urltxtrgl': 'hidden field', 'urlcarte': 'hidden field', 'urlcartec': 'hidden field', 'urlweb': 'hidden field', 'urlcarmen': 'hidden field', });
lyr_Sitesinscrits_151.set('fieldLabels', {'idsite': 'hidden field', 'idintgest': 'hidden field', 'dep': 'hidden field', 'nomsite': 'inline label - visible with data', 'type': 'hidden field', 'descriptio': 'hidden field', 'nature': 'hidden field', 'datedecis': 'hidden field', 'datedecisr': 'hidden field', 'surfoffic': 'hidden field', 'echnum': 'hidden field', 'precision': 'hidden field', 'srcgeogen': 'hidden field', 'datesrcgen': 'hidden field', 'surfcalc': 'hidden field', 'surfmer': 'hidden field', 'urlfiche': 'hidden field', 'urltxtrgl': 'hidden field', 'urlcarte': 'hidden field', 'urlcartec': 'hidden field', 'urlweb': 'hidden field', 'urlcarmen': 'hidden field', });
lyr_Immeubles_152.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'hidden field', 'parcelle': 'hidden field', 'appelation': 'inline label - visible with data', 'categorie': 'inline label - visible with data', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_ZPPAindiffrencies_153.set('fieldLabels', {'EA_NATCODE': 'inline label - visible with data', 'COMMUNE_PP': 'hidden field', 'NUMORDRE': 'hidden field', 'NUMERO': 'inline label - visible with data', 'NUMERO_DRA': 'hidden field', 'NOMUSUEL': 'inline label - visible with data', 'LIEU_IGN': 'hidden field', 'LIEU_CADAS': 'hidden field', 'VESTIGES': 'hidden field', 'NATURE_VES': 'hidden field', 'CHRONO_DEB': 'hidden field', 'CHRONO_FIN': 'hidden field', 'CHRONO_FOU': 'hidden field', 'CHRONO_DOU': 'hidden field', 'CHRONO_PER': 'hidden field', 'COMMENT_CH': 'hidden field', 'NUMERIQUE_': 'hidden field', 'NUMERIQU_1': 'hidden field', 'CHRONO_D_1': 'hidden field', 'X_SAISI': 'hidden field', 'Y_SAISI': 'hidden field', 'SURFACE': 'hidden field', 'PARCELLES': 'hidden field', 'INVENTEUR': 'hidden field', 'ANNEE_DECO': 'inline label - visible with data', 'X_DEGRE': 'hidden field', 'Y_DEGRE': 'hidden field', 'EMPRISE': 'hidden field', 'GEOREFEREN': 'hidden field', 'GEOMETRIE': 'hidden field', });
lyr_ZPPAindiffrenciescentrodes_154.set('fieldLabels', {'EA_NATCODE': 'hidden field', 'COMMUNE_PP': 'hidden field', 'NUMORDRE': 'hidden field', 'NUMERO': 'hidden field', 'NUMERO_DRA': 'hidden field', 'NOMUSUEL': 'hidden field', 'LIEU_IGN': 'hidden field', 'LIEU_CADAS': 'hidden field', 'VESTIGES': 'hidden field', 'NATURE_VES': 'hidden field', 'CHRONO_DEB': 'hidden field', 'CHRONO_FIN': 'hidden field', 'CHRONO_FOU': 'hidden field', 'CHRONO_DOU': 'hidden field', 'CHRONO_PER': 'hidden field', 'COMMENT_CH': 'hidden field', 'NUMERIQUE_': 'hidden field', 'NUMERIQU_1': 'hidden field', 'CHRONO_D_1': 'hidden field', 'X_SAISI': 'hidden field', 'Y_SAISI': 'hidden field', 'SURFACE': 'hidden field', 'PARCELLES': 'hidden field', 'INVENTEUR': 'hidden field', 'ANNEE_DECO': 'hidden field', 'X_DEGRE': 'hidden field', 'Y_DEGRE': 'hidden field', 'EMPRISE': 'hidden field', 'GEOREFEREN': 'hidden field', 'GEOMETRIE': 'hidden field', });
lyr_RoutesconcdesTypeC_155.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'VALIDEFIN': 'hidden field', 'LEG_SANEF': 'hidden field', });
lyr_RoutesconcdesTypeA_156.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'VALIDEDEB': 'hidden field', 'VALIDEFIN': 'hidden field', 'LEGENDPROD': 'hidden field', });
lyr_RoutesTypeC_157.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'UUEID': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'INDICETYPE': 'hidden field', 'VALIDEDEB': 'hidden field', 'VALIDEFIN': 'hidden field', });
lyr_RoutesTypeA_158.set('fieldLabels', {'IDZONBRUIT': 'hidden field', 'IDCBS': 'hidden field', 'UUEID': 'hidden field', 'ANNEE': 'hidden field', 'CODEDEPT': 'hidden field', 'TYPETERR': 'hidden field', 'PRODUCTEUR': 'hidden field', 'CODINFRA': 'hidden field', 'TYPESOURCE': 'hidden field', 'CBSTYPE': 'hidden field', 'ZONEDEF': 'hidden field', 'LEGENDE': 'inline label - visible with data', 'INDICETYPE': 'hidden field', 'VALIDEDEB': 'hidden field', 'VALIDEFIN': 'hidden field', });
lyr_Canalisationshydrocarbures_159.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_CanalisationsgazGRT_160.set('fieldLabels', {'object_id': 'hidden field', 'nom_region': 'hidden field', 'departemen': 'hidden field', });
lyr_CanalisationsgazGRDF_161.set('fieldLabels', {'etat_serv': 'hidden field', 'insee_comm': 'hidden field', 'commune_ad': 'hidden field', 'code_depar': 'hidden field', 'departemen': 'hidden field', 'region_adm': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_LignesbassetensionsouterrainesENEDIS_162.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LignesbassetensionariennesENEDIS_163.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LigneshautetensionsouterrainesENEDIS_164.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LigneshautetensionariennesENEDIS_165.set('fieldLabels', {'code_commu': 'hidden field', 'nom_commun': 'hidden field', 'code_epci': 'hidden field', 'nom_epci': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', });
lyr_LigneshautetensionRTE_166.set('fieldLabels', {'ID': 'hidden field', 'VOLTAGE': 'inline label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Postesdetransformation_167.set('fieldLabels', {'ID': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Itinraireautre_168.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', });
lyr_Voieferre_169.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'ELECTRIFIE': 'inline label - visible with data', 'LARGEUR': 'inline label - visible with data', 'NB_VOIES': 'inline label - visible with data', 'USAGE': 'hidden field', 'VITES_MAX': 'hidden field', 'ID_VFN': 'hidden field', 'TOPONYME': 'inline label - visible with data', });
lyr_RoutesdeGrandeCirculation_170.set('fieldLabels', {'objectid': 'hidden field', 'axe': 'hidden field', 'cumuld': 'hidden field', 'cumulf': 'hidden field', 'plod': 'hidden field', 'absd': 'hidden field', 'plof': 'hidden field', 'absf': 'hidden field', 'xd': 'hidden field', 'yd': 'hidden field', 'zd': 'hidden field', 'xf': 'hidden field', 'yf': 'hidden field', 'zf': 'hidden field', 'cote': 'hidden field', 'emplacemen': 'hidden field', 'voie': 'hidden field', 'distance': 'hidden field', 'accrochage': 'hidden field', 'objetid': 'hidden field', 'longueur': 'hidden field', 'releve_xy': 'hidden field', 'parent_id': 'hidden field', 'validation': 'hidden field', 'status': 'hidden field', 'link_id': 'hidden field', 'import': 'hidden field', 'user_creat': 'hidden field', 'date_creat': 'hidden field', 'user_modif': 'hidden field', 'date_modif': 'hidden field', 'territoire': 'hidden field', 'daterefere': 'hidden field', 'chaussee': 'hidden field', 'id_prj': 'hidden field', 'date_grde_': 'hidden field', 'grande_cir': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_Routesnumrotesounommes_171.set('fieldLabels', {'ID': 'hidden field', 'TYPE_ROUTE': 'hidden field', 'NUMERO': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'GESTION': 'hidden field', });
lyr_Niveaudurisque_172.set('fieldLabels', {'dpt': 'hidden field', 'niveau': 'inline label - visible with data', 'alea': 'hidden field', });
lyr_Zonesdalas_173.set('fieldLabels', {'ID_ZONE': 'hidden field', 'ID_GASPAR': 'hidden field', 'DESCRIPT': 'hidden field', 'CODERISQUE': 'hidden field', 'NOMRISQUE': 'hidden field', 'NIVALEA': 'inline label - visible with data', 'NIVALEA_ST': 'hidden field', 'TITRECARTE': 'hidden field', 'DATECARTE': 'hidden field', 'ID_MAP': 'hidden field', });
lyr_Zonesrglementaires_174.set('fieldLabels', {'id': 'hidden field', 'id_map': 'hidden field', 'id_zone': 'hidden field', 'id_gaspar': 'hidden field', 'nom': 'inline label - visible with data', 'codezone': 'hidden field', 'soumisalea': 'hidden field', 'typereg': 'hidden field', });
lyr_Ruissellement_175.set('fieldLabels', {'id': 'hidden field', 'id_map': 'hidden field', 'id_zone': 'hidden field', 'id_gaspar': 'hidden field', 'nom': 'hidden field', 'codezone': 'hidden field', 'soumisalea': 'hidden field', 'typereg': 'hidden field', });
lyr_Secteurs_176.set('fieldLabels', {'ALEA': 'inline label - visible with data', });
lyr_ICPE_177.set('fieldLabels', {'code_aiot': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'code_epsg': 'hidden field', 'nom_ets': 'inline label - visible with data', 'num_dep': 'hidden field', 'adresse': 'hidden field', 'cd_insee': 'hidden field', 'cd_postal': 'hidden field', 'commune': 'hidden field', 'code_naf': 'hidden field', 'lib_naf': 'hidden field', 'num_siret': 'hidden field', 'cd_regime': 'hidden field', 'lib_regime': 'hidden field', 'seveso': 'hidden field', 'lib_seveso': 'inline label - visible with data', 'bovins': 'hidden field', 'porcs': 'hidden field', 'volailles': 'hidden field', 'carriere': 'hidden field', 'eolienne': 'hidden field', 'industrie': 'hidden field', 'ied': 'hidden field', 'priorite_n': 'hidden field', 'url_fiche': 'hidden field', });
lyr_SitesBASOL_178.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_etab': 'inline label - visible with data', 'nom_instr': 'hidden field', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'hidden field', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_Sitespollus_179.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_ets': 'inline label - visible with data', 'nom_site': 'hidden field', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'hidden field', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_Zonesimpermables_180.set('fieldLabels', {'Id': 'hidden field', });
lyr_Remontesdenappes_181.set('fieldLabels', {'CLASSE': 'inline label - visible with data', 'FIAB_MNT': 'hidden field', 'FIAB_ESO': 'hidden field', 'FIAB_TOT': 'hidden field', 'CLASSEFIAB': 'hidden field', 'gridcode': 'hidden field', });
lyr_ZNIEFFtype2_182.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_ZNIEFFtype1_183.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Zoneshumides_184.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Natura2000_185.set('fieldLabels', {'SITECODE': 'hidden field', 'SITENAME': 'hidden field', });
lyr_Cimetire_186.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Rservoir_187.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'HAUTEUR': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'VOLUME': 'inline label - visible with data', });
lyr_Terraindesport_188.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Monument_189.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'USAGE1': 'header label - always visible', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'hidden field', 'MAT_MURS': 'hidden field', 'MAT_TOITS': 'hidden field', 'HAUTEUR': 'header label - always visible', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Indiffrenci_190.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'USAGE1': 'inline label - visible with data', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'inline label - visible with data', 'NB_ETAGES': 'inline label - visible with data', 'MAT_MURS': 'inline label - visible with data', 'MAT_TOITS': 'inline label - visible with data', 'HAUTEUR': 'hidden field', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Industrielagricoleoucommercial_191.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'USAGE1': 'inline label - visible with data', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'inline label - visible with data', 'MAT_MURS': 'hidden field', 'MAT_TOITS': 'inline label - visible with data', 'HAUTEUR': 'inline label - visible with data', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Constructionsponctuelles_192.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'inline label - visible with data', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'inline label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'HAUTEUR': 'hidden field', });
lyr_Pylne_193.set('fieldLabels', {'ID': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'HAUTEUR': 'inline label - visible with data', });
lyr_CCdes4Rivires_194.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CCBrayEawy_195.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_CCdeLondinieres_196.set('fieldLabels', {'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Parcellescadastrales_197.set('fieldLabels', {'id': 'hidden field', 'commune': 'hidden field', 'prefixe': 'hidden field', 'section': 'inline label - visible with data', 'numero': 'inline label - visible with data', 'contenance': 'hidden field', 'created': 'hidden field', 'updated': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communesassociesoudlgues_198.set('fieldLabels', {'ID': 'hidden field', 'INSEE_CAD': 'hidden field', 'INSEE_COM': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'POPULATION': 'hidden field', 'CODE_SIREN': 'hidden field', });
lyr_CommunesadhrentesADS_199.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communes_200.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'inline label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_201.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_201.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});