define(["qlik", "./util", "./properties"], function (qlik, util, prop) {
    'use strict';
        
    function getClass(style, type, selected) {
        switch (style) {
            case "material":
            case "bootstrap":
                if (selected) {
                    return "selected";
                }
                break;
            default:
                switch (type) {
                    case 'button':
                        return selected ? 'qui-button-selected lui-button lui-button--success' : 'qui-button lui-button';
                    case 'select':
                        return 'qui-select lui-select';
                    case 'input':
                        return 'qui-input lui-input';
                }
        }
    }
        
} );
