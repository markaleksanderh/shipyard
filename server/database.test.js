const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create note', async () => {
    expect.assertions(1);
    const note = await db.Note.create({
        id: 1,
        title: 'First standup',
        description: 'Standup update'
    });
    expect(note.id).toEqual(1);
});

test('get note', async () => {
    expect.assertions(2);
    const note = await db.Note.findByPk(1);
    expect(note.title).toEqual('First standup');
    expect(note.description).toEqual('Standup update');
});

test('delete note', async () => {
    expect.assertions(1);
    await db.Note.destroy({
        where: {
            id: 1
        }
    });
    const note = await db.Note.findByPk(1);
    expect(note).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});