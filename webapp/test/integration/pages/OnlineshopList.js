sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'fyqzrap610shop001',
            componentId: 'OnlineshopList',
            contextPath: '/Onlineshop'
        },
        CustomPageDefinitions
    );
});