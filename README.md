<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

#### Список методов (dev)

## Публичные методы

#### Авторизация
   - POST - /api/auth/login - **авторизация**
   ```
    email: string
    password: string
    remember_me: optional, boolean, default: false
   ```
   - POST - /api/auth/register - **регистрация пользователя**
   ```
    name: string
    surname: string
    email: string
    password: string
    password_confirmation: string
   ```
   - POST - /api/auth/logout - **выход из аккаунта**
   - POST - /api/auth/me - **получение данных от аккаунта по токену**
   - POST - /api/auth/refresh - **обновление токена**


## Приватные методы
   #### Пользователи
   - POST - /api/user/{id} - **получение данных о пользователе по его id**
   - POST - /api/user/change.link - **смена id на короткий**
   ```
    link: string
   ```
   - POST - /api/user/change.password - **смена пароля(находится в тестировании)**
   ```
    last_password: string
    new_password: string
    email: string
   ```
   #### Друзья
   - POST - /api/friends/send.request - **отправка запроса на дружбу**
   ```
    recipient_id: string
   ```
   - POST - /api/friends/accept.request - **принять запрос дружбы**
   ```
    sender_id: string
   ```
   - POST - /api/friends/pending.list - **получить всех друзей**
   - POST - /api/friends/unfriend.user - **удалить пользователя из друзей**
   
   #### Сообщения
   - GET - /api/messages/get - **получить все сообщения(аналогично getUpdates в телеграмме)**
   - GET - /api/messages/send.message - **отправить сообщение**
   ```
    text: string
    to_id: integer
   ```
   - GET - /api/messages/get.dialogs - **получение диалогов пользователя**
