sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'fyqzrap610shop001',
            componentId: 'OnlineshopObjectPage',
            contextPath: '/Onlineshop'
        },
        CustomPageDefinitions
    );
});