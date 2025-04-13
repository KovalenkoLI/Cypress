describe('PokemonBattle', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашли на сайт
         cy.get('.style_1_popup_white_in').should('be.visible'); // Форма для заполнения видна
         cy.get('.MuiButton-root').should('have.css', 'background-color', 'rgb(237, 111, 45)'); // Кнопка Войти имеет цвет фона ...
         cy.get('.footer_container').should('be.visible'); //Футер виден
         cy.get('#k_email').type('user_email'); //Вводим логин
         cy.get('#k_password').type('user_password'); //вводим пароль
         cy.get('.MuiButton-root').click(); //Нажали кнопку войти
         cy.wait(2000); //Подождем немного
         cy.get('.header_card_trainer').click(); //Перешли в раздел тренеров
         cy.wait(2000); //Подождем еще немного
         cy.get('.k_mobile > :nth-child(5)').click(); //Нажали Покупка аватара
         cy.get('.available > button').its('length').then(length => {
            const randomButtonIndex = Math.floor(Math.random() * length);
            cy.get('.available > button').eq(randomButtonIndex).click();
        }); // выбираем рандомный аватар тренера
         cy.get('.payment_form_card_form').should('be.visible'); //Форма заполнения данных карты оплаты
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111'); //Ввели номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('10/26'); //Срок действия карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); //CSV
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Cheburashka'); //владелец карты
         cy.wait(2000); //Подождем немного
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Оформляем
         cy.get('.style_1_base_input').type('56456'); //Ввели код из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); //Подтверждаем
         cy.get('.payment_form_card_form').should('be.visible'); //Форма ответа видна
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Ответ виден
         cy.get('.style_1_base_link_blue').click(); //Возврат в магазин
     })
    
    
})