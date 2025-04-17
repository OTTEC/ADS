var size = 0;
var placement = 'point';
function categories_Prescriptionssurfaciques_102(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ER 1:construction dune bibliothèque':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,1,1,0.23137254901960785)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ER 2:Extension de lécole':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,1,1,0.23137254901960785)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ER 3:Extension du cimetière':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,1,1,0.23137254901960785)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ER 4:Amgnt carrefour RD 12/VC 2-Bassin rétention-Escpave vert':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,1,1,0.23137254901960785)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ER 5:Élargissement de la voirie':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,1,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,1,1,0.23137254901960785)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Espaces boisés classés':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,138,50,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(59,138,50,0.27058823529411763)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Secteur 1AUa comprennant des orientations d\'aménagement':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: [5.016,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(0,0,255,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Secteur dexpansion des ruissellements':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,225,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,225,255,0.23529411764705882)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone daléas géologiques':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(184,61,0,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(184,61,0,0.30980392156862746)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Prescriptionssurfaciques_102 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("LIBELLE");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Prescriptionssurfaciques_102(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
