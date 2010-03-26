var mail = require('ringo/mail');

const ADDRESS_1 = 'no-reply@example.com';
const ADDRESS_2 = 'ringojs@mailinator.com';
const ADDRESS_3 = 'commonjs@mailinator.com';
const SUBJECT = '[Foo] Bar';
const TEXT = 'Hi!\n\nThis is some text.\n\nCheers, Tester';

exports.testSendingMailWithVariousInputOptions = function () {
    mail.send({from: ADDRESS_1, to: ADDRESS_2, subject: SUBJECT, text: TEXT});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, text: TEXT});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, subject: SUBJECT});
    mail.send({from: ADDRESS_1, to: [ADDRESS_2, ADDRESS_3]});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, cc: ADDRESS_3});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, cc: [ADDRESS_3, ADDRESS_1]});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, bcc: ADDRESS_3});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, bcc: [ADDRESS_3, ADDRESS_1]});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, replyTo: ADDRESS_1});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, replyTo: [ADDRESS_1, ADDRESS_3]});
    mail.send({from: ADDRESS_1, to: ADDRESS_2, headers:
            {'Content-Language': 'en', Keywords: 'ringojs, javax.mail'}});
    mail.send({from: ADDRESS_1, to: ADDRESS_2});
};

if (require.main == module.id) {
    require('ringo/unittest').run(exports);
}
