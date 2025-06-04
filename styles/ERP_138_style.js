var size = 0;
var placement = 'point';
function categories_ERP_138(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ADMINISTRATION PRIVEE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(204,21,15,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ADMINISTRATIONS, BANQUES, BUREAUX':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(108,227,179,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AUTRE ENSEIGNEMENT PRIVE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(66,146,220,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AUTRE ENSEIGNEMENT PRIVE (AVEC SOMMEIL)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(155,30,209,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AUTRE ENSEIGNEMENT PUBLIC':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(108,236,157,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BRICOLAGE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(92,170,218,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CABINET MEDICAL, CABINET DENTAIRE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(119,209,58,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CASINO':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(125,216,140,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CENTRE AERE, CENTRE DE LOISIRS (AVEC SOMMEI':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(202,120,199,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CENTRE COMMERCIAL':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(50,226,15,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CENTRE EQUESTRE (AVEC SOMMEIL)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(125,121,215,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CENTRE SOCIAL CULTUREL':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(203,197,120,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CINEMA':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(68,231,240,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COLLEGE PRIVE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(146,121,216,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COLLEGE PUBLIC':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(234,73,175,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COLONIE DE VACANCES (AVEC SOMMEIL)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(196,202,92,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CRECHE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(63,131,233,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DISCOTHEQUE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(178,142,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ECOLE MATERNELLE PUBLIQUE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(38,231,176,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ECOLE PRIMAIRE PUBLIQUE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(219,79,54,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EHPAD':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(234,160,50,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ETABLISSEMENT CULTUEL':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(236,23,87,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ETABLISSEMENTS SPORTIFS COUVERTS':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(189,31,200,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EXPOSITION PERMANENTE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(201,13,88,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EXPOSITION TEMPORAIRE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(191,133,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'FOYER DE L\'ENFANCE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(168,208,59,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'FOYER DE L\'ENFANCE (AVEC SOMMEIL)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(107,233,210,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GROUPE SCOLAIRE PRIVE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(231,196,18,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GROUPE SCOLAIRE PUBLIC':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(79,55,215,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HEBERGEMENT POUR PERSONNES HANDICAPEES':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(140,59,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'HIPPODROME':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(37,51,239,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'JARDINAGE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(131,224,125,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LYCEE PRIVE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(221,165,22,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LYCEE PRIVE (AVEC SOMMEIL)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(200,115,159,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LYCEE PUBLIC':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(213,148,126,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LYCEE PUBLIC (AVEC SOMMEIL)':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(129,222,216,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MAGASIN DE VENTE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(45,96,225,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MAISON DE RETRAITE MEDICALISEE (AVEC SOMMEI':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(120,203,87,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PARC DE STATIONNEMENT':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(123,207,40,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PISCINE COUVERTE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(233,14,175,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PRESTATAIRE DE SERVICE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(231,57,69,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RESTAURANT':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(47,188,213,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RESTAURANT ET DEBITS DE BOISSONS':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(185,114,201,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RESTAURANT LYCEE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(201,221,101,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE DE JEUX':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(131,226,136,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE DE REUNIONS':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(16,221,71,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE DE SPECTACLES':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(212,153,116,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE DE SPORT SPECIALISEE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(99,120,213,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE OMNISPORTS':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(211,76,191,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE OMNISPORTS COLLEGE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(217,33,67,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE OMNISPORTS LYCEE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(113,195,225,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLE POLYVALENTE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(53,228,137,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SALLES D\'AUDITION, DE CONFERENCES, DE REUNI':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.0 + size, points: 4,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(238,131,23,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ERP_138 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("LIBELLE");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("LIBELLE") !== null) {
        labelText = String(feature.get("LIBELLE"));
    }
    
    var style = categories_ERP_138(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
