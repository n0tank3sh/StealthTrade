/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/token/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description generate a token for the user */
        post: operations["generateNewToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/profile-picture": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveProfilePicture"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/username": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveUserName"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/orders/{order-id}/swap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description creating swap */
        post: operations["createSwap"];
        /** @description creating swap */
        delete: operations["deleteSwap"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/orders/{order-id}/trade": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveTrade"];
        put?: never;
        post: operations["createTrade"];
        delete: operations["deleteTrade"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/orders/{order-id}/trade/escrow/dispute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Raise a dispute */
        post: operations["RaiseDispute"];
        /** @description Succesfully delete the dispute */
        delete: operations["disolveDispute"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/orders/{order-id}/trade/escrow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description get the escrow status */
        get: operations["RetrieveEscrow"];
        put?: never;
        /** @description start the escrow */
        post: operations["CreateEscrow"];
        /** @description Delete the escrow */
        delete: operations["deleteEscrow"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get the list of orders */
        get: operations["retrieveOrderBook"];
        put?: never;
        /** @description Create an order */
        post: operations["createNewOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/orders/{order-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get the list of the orders */
        get: operations["retrieveOrder"];
        put?: never;
        post?: never;
        /** @description Delete the order with id */
        delete: operations["deleteOrder"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Format: uuid
         * @description id of the order
         * @example 0801435b-24ec-474c-8a1d-7c3c8b7b25e0
         */
        OrderId: string;
        /** @description the data structure to proceed with swap */
        Swap: {
            MoneroAddr?: string;
            OtherCrypto?: string;
        };
        JSONMessage: {
            /** @example Here is the message */
            message?: string;
        };
        Account: {
            id?: string;
            /** Format: url */
            picture?: string;
            name?: string;
        };
        Order: {
            /** Format: uuid */
            id?: string;
            /** Format: double */
            amount?: number;
            /** Format: double */
            premium?: number;
            bid?: boolean;
            swap?: boolean;
            currency?: string;
        };
        OrderArray: {
            schema?: components["schemas"]["Order"];
        }[];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    generateNewToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description succesfully generated a token */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example s0m3th1ngl1k3th1sw1th30char */
                        token?: string;
                    };
                };
            };
        };
    };
    retrieveProfilePicture: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: url */
                        url?: string;
                    };
                };
            };
        };
    };
    retrieveUserName: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        schema?: {
                            username?: string;
                        };
                    };
                };
            };
        };
    };
    createSwap: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description successfully created a swap */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        schema?: components["schemas"]["JSONMessage"];
                    };
                };
            };
        };
    };
    deleteSwap: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description successfully created a swap */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        schema?: components["schemas"]["JSONMessage"];
                    };
                };
            };
        };
    };
    retrieveTrade: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description succesfully retrieved a trade */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createTrade: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description successfully created a trade */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteTrade: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description succesfully deleted a trade */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RaiseDispute: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully raised a dispute */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    disolveDispute: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Succesfully resolved the dispute */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RetrieveEscrow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully returning the status of the escrow */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        status?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JSONMessage"];
                };
            };
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CreateEscrow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully started an escrow */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteEscrow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description return the message of deletion */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JSONMessage"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description invalid api key */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description escrow not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    retrieveOrderBook: {
        parameters: {
            query?: {
                field?: string;
                offset?: number;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description list of orders */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrderArray"];
                };
            };
        };
    };
    createNewOrder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Order details */
        requestBody: {
            content: {
                "application/json": components["schemas"]["Order"];
            };
        };
        responses: {
            /** @description Object accepted */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JSONMessage"];
                };
            };
        };
    };
    retrieveOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Order"];
                };
            };
        };
    };
    deleteOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the order */
                "order-id": components["schemas"]["OrderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sucessfully deleted the object with the uuid */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["JSONMessage"];
                };
            };
        };
    };
}
