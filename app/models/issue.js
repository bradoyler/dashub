var Issue = DS.Model.extend({
    state: DS.attr('string'),
    title: DS.attr('string')
});

Issue.idField = 'number';

export default Issue;