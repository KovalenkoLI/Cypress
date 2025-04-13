import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#form').should('be.visible');
        cy.get(main_page.footer).should('be.visible');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
          });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible');
          });

    it('Позитивный кейс', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Авторизация прошла успешно');
          })

    it('Восстановление пароля', function () {
         cy.get(main_page.fogot_pass_btn).click();
         cy.get('#forgotForm').should('be.visible');
         cy.get(recovery_password_page.email).type(data.login);
         cy.get(recovery_password_page.send_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');
          })

    it('Неверный логин', function () {
         cy.get(main_page.email).type('german@dolnikov.com');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Такого логина или пароля нет');
          })

    it('Неверный пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type('iLoveqastudio199');
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Такого логина или пароля нет');
          })

    it('Логин без @', function () {
         cy.get(main_page.email).type('germandolnikov.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Нужно исправить проблему валидации');
          })

    it('Секретный кейс', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).should('be.visible');
         cy.get(result_page.title).contains('Авторизация прошла успешно');
          })
 }) 



 // 1. Напиши проверку на позитивный кейс авторизации:
 // 2. Напиши автотест на проверку логики восстановления пароля:
 // 3. Напиши проверку на негативный кейс авторизации (неправильный логин):
 // 4. Напиши проверку на негативный кейс авторизации (неправильный пароль):
 // 5. Напиши проверку на негативный кейс авторизации (логин без @):
 // 6. Напиши проверку на приведение к строчным буквам в логине:
