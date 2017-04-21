/*global define*/
define(["./util"], function(util) {
    'use strict';
    return {

        initialProperties: {
            variableValue: {},
            variableName: "",
            render: "f",
            alternatives: [],
            min: 0,
            max: 100,
            step: 1,
            style: "qlik",
            width: "",
            customwidth: ""
        },
        definition: {
            type: "items",
            component: "accordion",
            items: {
                settings: {
                    uses: "settings",
                    items: {
                        variable: {
                            type: "items",
                            label: "Variable",
                            items: {
                                name: {
                                    ref: "variableName",
                                    label: "Name",
                                    type: "string",
                                    change: function(data) {
                                        util.createVariable(data.variableName);
                                        data.variableValue = data.variableValue || {};
                                        data.variableValue.qStringExpression = '=' + data.variableName;
                                    }
                                },
                                style: {
                                    type: "string",
                                    component: "dropdown",
                                    label: "Style",
                                    ref: "style",
                                    options: [{
                                        value: "qlik",
                                        label: "Qlik"
                                    }, {
                                        value: "bootstrap",
                                        label: "Bootstrap"
                                    }, {
                                        value: "material",
                                        label: "Material"
                                    }]
                                },
                                width: {
                                    type: "string",
                                    component: "dropdown",
                                    label: "Width",
                                    ref: "width",
                                    options: [{
                                        value: "",
                                        label: "Default"
                                    }, {
                                        value: "fill",
                                        label: "Fill"
                                    }, {
                                        value: "custom",
                                        label: "Custom"
                                    }]
                                },
                                customwidth: {
                                    type: "string",
                                    ref: "customwidth",
                                    label: "Custom width",
                                    expression: "optional",
                                    show: function(data) {
                                        return data.width === "custom";
                                    }
                                },
                                render: {
                                    type: "string",
                                    component: "dropdown",
                                    label: "Render as",
                                    ref: "render",
                                    options: [{
                                        value: "b",
                                        label: "Button"
                                    }],
                                    defaultValue: "f"
                                },
                                alternatives: {
                                    type: "array",
                                    ref: "alternatives",
                                    label: "Alternatives",
                                    itemTitleRef: "label",
                                    allowAdd: true,
                                    allowRemove: true,
                                    addTranslation: "Add Alternative",
                                    items: {
                                        value: {
                                            type: "string",
                                            ref: "value",
                                            label: "Value",
                                            expression: "optional"
                                        },
                                        label: {
                                            type: "string",
                                            ref: "label",
                                            label: "Label",
                                            expression: "optional"
                                        }
                                    },
                                    show: function(data) {
                                        return data.render === "b" || data.render === "s";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
});
