/*!
 * sestorage library v1.0.0
 * https://github.com/Nogard7491/sestorage
 */
(function (factory) {
    "use strict";

    if (typeof exports === "object") {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(['sestorage'], factory);
    } else {
        window.sestorage = new factory();
    }
})(function () {

    /**
     * Создаёт объект.
     *
     * @constructor
     */
    var sestorage = function () {

    };

    /**
     * Проверяет работает ли локальное хранилище в текущей сессии.
     *
     * @return {boolean} флаг сущестования локального хранилища
     */
    sestorage.prototype.checkEnabled = function () {

        try {
            return "sessionStorage" in window && window["sessionStorage"] !== null;
        } catch (ex) {
            return false;
        }
    };

    /**
     * Проверяет существует ли элемент в локальном хранилище текущей сессии.
     *
     * @param key ключ
     * @return {boolean} флаг сущестования переменной
     */
    sestorage.prototype.exists = function (key) {

        return (this.get(key) === null) ? false : true;
    };

    /**
     * Получает ключ элемента по его порядковому номеру.
     *
     * @param index порядковый номер
     * @return {string} ключ переменной
     */
    sestorage.prototype.getKey = function (index) {

        return sessionStorage.key(index);
    };

    /**
     * Получает значение элемента локального хранилища текущей сессии.
     *
     * @param key ключ
     * @return {mixed} значение переменной
     */
    sestorage.prototype.get = function (key) {

        var result = sessionStorage.getItem(key);

        try {
            result = JSON.parse(result);
        } catch (ex) {
            return result;
        }

        return result;
    };

    /**
     * Создаёт элемент в локальном хранилище текущей сессии.
     *
     * @param key ключ
     * @param value значение
     */
    sestorage.prototype.set = function (key, value) {

        sessionStorage.setItem(key, JSON.stringify(value));
    };

    /**
     * Удаляет элемент из локального хранилища текущей сессии.
     *
     * @param key ключ
     */
    sestorage.prototype.delete = function (key) {

        sessionStorage.removeItem(key);
    };

    /**
     * Очищает локальное хранилище текущей сессии.
     */
    sestorage.prototype.deleteAll = function () {

        sessionStorage.clear();
    };

    /**
     * Получает количество элементов локального хранилища текущей сессии.
     *
     * @return {number} количество элементов
     */
    sestorage.prototype.getLength = function () {

        return sessionStorage.length;
    };

    return new sestorage();
});