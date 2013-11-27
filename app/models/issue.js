var Issue = DS.Model.extend({
	number: DS.attr('number'),
	html_url : DS.attr('string'),
	updated_at: DS.attr('date'),
	user: DS.attr(),
	assignee: DS.attr(),
	labels: DS.attr(),
	milestone: DS.attr(),
	comments: DS.attr(),
	pull_request: DS.attr(),
    state: DS.attr('string'),
    title: DS.attr('string')
});

Issue.idField = 'number';

export default Issue;