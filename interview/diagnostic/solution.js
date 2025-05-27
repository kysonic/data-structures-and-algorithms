// Дан список вопросов для диагностики автомобиля.
// Вопросы делятся по категориям А,B,C,D,E. В каждой категории может использоваться один и тот же код.
// Вопросы в категориях делятся по группам: engine, electric, chassis
// У каждого вопроса есть несколько ответов, только один из них верный, он помечен как isGood true
const questions = [
    {
        id: 733,
        code: '000000032',
        title: 'Визуальный осмотр ДВС на течь технологических жидкостей (масло, антифриз)',
        category: 'A',
        isRequired: true,
        diagnosticsType: 'mechanic',
        group: 'engine',
        answerType: 'select',
        answers: [
            {
                id: 1,
                code: 'РАСУ00001',
                title: 'Течь масла ',
                questionCode: '000000032',
                isGood: false,
            },
            {
                id: 2,
                code: 'РАСУ00002',
                title: 'Течь антифриза',
                questionCode: '000000032',
                isGood: false,
            },
            {
                id: 3,
                code: 'РАСУ00003',
                title: 'Наличие течи масла и антифриза',
                questionCode: '000000032',
                isGood: false,
            },
            {
                id: 4,
                code: 'РАСУ00004',
                title: 'Течи отсутствуют ',
                questionCode: '000000032',
                isGood: true,
            },
        ],
    },
    {
        id: 734,
        code: '000000033',
        title: 'Визуальная проверка целостности ДВС (повреждение поддона, состояние кронштейнов крепления ДВС, подушек ДВС)',
        category: 'A',
        isRequired: true,
        diagnosticsType: 'mechanic',
        group: 'engine',
        answerType: 'select',
        answers: [
            {
                id: 5,
                code: 'РАСУ00001',
                title: 'Повреждений нет',
                questionCode: '000000033',
                isGood: true,
            },
            {
                id: 6,
                code: 'РАСУ00002',
                title: 'Есть повреждения',
                questionCode: '000000033',
                isGood: false,
            },
        ],
    },
    {
        id: 735,
        code: '000000029',
        title: 'Наличие вмешательства в электропроводку автомобиля (видимые повреждения)',
        category: 'A',
        isRequired: true,
        diagnosticsType: 'mechanic',
        group: 'engine',
        answerType: 'select',
        answers: [
            {
                id: 7,
                code: 'РАСУ00001',
                title: 'Нареканий нет',
                questionCode: '000000029',
                isGood: true,
            },
            {
                id: 8,
                code: 'РАСУ00002',
                title: 'Наличие следов вмешательства(врезка в штатную проводку, установка доп оборудования)',
                questionCode: '000000029',
                isGood: false,
            },
            {
                id: 9,
                code: 'РАСУ00003',
                title: 'Наличие критичных нарушений(нарушение изоляции,Окисление клемм АКБ, обрыв проводов)',
                questionCode: '000000029',
                isGood: false,
            },
        ],
    },
];
// Данны данные по диагностикам авто (может быть несколько для одного авто),
// в которых содержится список ответов на вопросы
const diagnostics = {
    items: [
        {
            id: 4573,
            brand: 'LADA',
            model: 'LADA KALINA',
            status: 'completed',
            category: 'A',
            stateNumber: 'РАСУЛ2024-12-17',
            orderNumber: 'ЧАБДАРОВ2024-12-17',
            barcode: '9007264989592',
            createdDate: '2024-12-17T10:51:57.000Z',
            electricianId: null,
            mechanicId: null,
            savedParts: ['mechanic', 'electric'],
            answers: [
                {
                    questionCode: '000000032',
                    answers: ['РАСУ00001'],
                    media: [],
                },
                {
                    questionCode: '000000033',
                    answers: ['РАСУ00001'],
                    media: [],
                },
                {
                    questionCode: '000000029',
                    answers: ['РАСУ00002'],
                    media: [],
                },
            ],
        },
    ],
};

// Необходимо написать алгоритм, который сгруппирует ответы по группам (двигатель, электрика, шасси) и оставит только
// НЕКОРРЕКТНЫЕ ответы по каждой из групп. Если в группе нет некорректных ответов, такую группу необходимо пропустить.

function prepareAnswers(questions, diagnostic) {
    // Создаем карту вопросов для быстрого доступа по коду
    const questionMap = {};
    questions.forEach((q) => {
        questionMap[q.code] = q;
    });

    const groups = {};

    // Перебираем все диагностики в items
    diagnostic.items.forEach((item) => {
        item.answers.forEach((answer) => {
            const question = questionMap[answer.questionCode];
            if (!question) return; // Пропускаем, если вопрос не найден

            // Находим правильный ответ для вопроса
            const correctAnswer = question.answers.find((a) => a.isGood);
            if (!correctAnswer) return; // Пропускаем, если нет правильного ответа

            const correctCode = correctAnswer.code;
            const selectedCodes = answer.answers;

            // Проверяем, есть ли среди выбранных ответов правильный
            const isCorrect = selectedCodes.includes(correctCode);
            if (!isCorrect) {
                const groupKey = question.group;
                if (!groups[groupKey]) {
                    groups[groupKey] = [];
                }
                // Получаем тексты выбранных ответов
                const incorrectAnswers = selectedCodes.map((code) => {
                    const ans = question.answers.find((a) => a.code === code);
                    return ans ? ans.title : code;
                });
                groups[groupKey].push({
                    question: question.title,
                    incorrectAnswers: incorrectAnswers,
                });
            }
        });
    });

    // Удаляем пустые группы
    Object.keys(groups).forEach((group) => {
        if (groups[group].length === 0) {
            delete groups[group];
        }
    });

    return groups;
}

console.log(prepareAnswers(questions, diagnostics));
