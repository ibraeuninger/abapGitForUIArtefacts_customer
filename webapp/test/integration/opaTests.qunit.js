sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fyqzrap610shop001/test/integration/FirstJourney',
		'fyqzrap610shop001/test/integration/pages/OnlineshopList',
		'fyqzrap610shop001/test/integration/pages/OnlineshopObjectPage'
    ],
    function(JourneyRunner, opaJourney, OnlineshopList, OnlineshopObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fyqzrap610shop001') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOnlineshopList: OnlineshopList,
					onTheOnlineshopObjectPage: OnlineshopObjectPage
                }
            },
            opaJourney.run
        );
    }
);