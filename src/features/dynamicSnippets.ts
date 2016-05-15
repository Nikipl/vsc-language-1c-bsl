export function dynamicSnippets(): any {
    let data = {
        "Если": {
            "prefix": "Если",
            "body": "Если $1 Тогда\n\t$0\nКонецЕсли;",
            "description": "Если"
        },
        "ЕслиИначе": {
            "prefix": "Если",
            "body": "Если $1 Тогда\n\t$0\nИначе\nКонецЕсли;",
            "description": "ЕслиИначе"
        },
        "Пока": {
            "prefix": "Пока",
            "body": "Пока $1 Цикл\n\t$0\nКонецЦикла;",
            "description": "Пока"
        },
        "Для": {
            "prefix": "Для",
            "body": "Для $1 По  Цикл\n\t$0\nКонецЦикла;",
            "description": "Для"
        },
        "Для каждого": {
            "prefix": "ДляКаждого",
            "body": "Для каждого $1 Из $2 Цикл\n\t$0\nКонецЦикла;",
            "description": "Для каждого"
        },
        "Процедура": {
            "prefix": "Процедура",
            "body": "Процедура $1()\n\t$0\nКонецПроцедуры",
            "description": "Процедура"
        },
        "Функция": {
            "prefix": "Функция",
            "body": "Функция $1()\n\t$0\nКонецФункции",
            "description": "Функция"
        },
        "Попытка": {
            "prefix": "Попытка",
            "body": "Попытка\n\t$0\nИсключение\nКонецПопытки;",
            "description": "Попытка"
        },
        "Условная конструкция ?(,,)": {
            "prefix": "?",
            "body": "?($0, , )",
            "description": "Условная конструкция ?(,,)"
        },
        "Группировка блока кода": {
            "prefix": "?",
            "body": "//{ $1\n$0\n//}",
            "description": "Группировка блока кода"
        },
        "ЕСТЬNULL(<Поле>, 0)": {
            "prefix": "ЕСТЬNULL",
            "body": "ЕСТЬNULL($0, 0)",
            "description": "ЕСТЬNULL(<Поле>, 0)"
        },
        "ЕСТЬNULL(<Поле>, |)": {
            "prefix": "ЕСТЬNULL",
            "body": "ЕСТЬNULL($0, $1)",
            "description": "ЕСТЬNULL(<Поле>, |)"
        }
    };
    return data;
}