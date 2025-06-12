var size = 0;
var placement = 'point';
function categories_ICPE_182(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Activités des sièges sociaux ; conseil de gestion':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(73,107,200,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Collecte et traitement des eaux usées\', \'Collecte, traitement et élimination des déchets ; récupération\']':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(33,238,53,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Commerce de détail, à l?exception des automobiles et des motocycles\', \'Commerce de gros, à l?exception des automobiles et des motocycles\', "Commerce et réparation d\'automobiles et de motocycles"]':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(83,221,210,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Culture et production animale, chasse et services annexes':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(83,229,136,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dépollution et autres services de gestion des déchets':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(233,61,76,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '["Fabrication d\'autres produits minéraux non métalliques", \'Fabrication de meubles\', \'Fabrication de produits en caoutchouc et en plastique\']':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(126,86,234,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Génie civil':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(91,214,66,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Industrie chimique\', \'Industrie du papier et du carton\', \'Industries alimentaires\', \'Autres industries extractives\']':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(42,42,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Production et distribution d\'électricité, de gaz, de vapeur et d\'air conditionné':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(153,206,109,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '["Travail du bois et fabrication d\'articles en bois et en liège, à l?exception des meubles ; fabrication d?articles en vannerie et sparterie", \'Travaux de construction spécialisés\']':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(206,162,40,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ICPE_182 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("lib_naf");
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
    
    var style = categories_ICPE_182(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
