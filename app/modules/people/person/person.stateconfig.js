module.exports = ['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('person', {
            name: 'person',
            url: '/person/:personId',
            parent: 'people',
            component: 'app.personComponent',
            resolve: {
                person: ["app.peopleService", "$stateParams", (peopleService, params) => {
                    debugger;
                    return peopleService.findById(params.id);
                }]
            }
        });
}];