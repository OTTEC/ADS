var size = 0;
var placement = 'point';
function categories_Prescriptionslinaires_120(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Axes de ruissellements':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,43,247,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Axes de ruissellements concentrés, sans zone d\'expansion':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,211,245,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Prescriptionslinaires_120 = function(feature, resolution){
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
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Prescriptionslinaires_120(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
