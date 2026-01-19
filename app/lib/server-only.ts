// This file ensures code is only executed on the server
// If this module is imported on the client, it will throw an error
if (typeof window !== "undefined") {
    throw new Error(
        "This module can only be imported in a Server Component"
    )
}
