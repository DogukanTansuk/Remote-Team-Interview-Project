'use strict';

exports.list = (req, res) => {
    const airtable = require('airtable');
    airtable.configure({ apiKey: 'keypQrVQgcfMIi7lC' });

    const base = airtable.base("apphtt3QSlALYrAoM");

    const apps = base("Features");

    const all = apps.select({ view: "All Features" });

    all.firstPage((error, records) => {
        console.log(records);
        res.json(records);
    })
}