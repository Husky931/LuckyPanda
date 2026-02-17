import { validateEmail, escapeHtml } from "@/app/lib/utils"

describe("validateEmail", () => {
    it("returns true for valid emails", () => {
        expect(validateEmail("user@example.com")).toBe(true)
        expect(validateEmail("test.user@domain.co.uk")).toBe(true)
        expect(validateEmail("a@b.co")).toBe(true)
    })

    it("returns false for invalid emails", () => {
        expect(validateEmail("")).toBe(false)
        expect(validateEmail("invalid")).toBe(false)
        expect(validateEmail("@domain.com")).toBe(false)
        expect(validateEmail("user@")).toBe(false)
        expect(validateEmail("user@domain")).toBe(false)
        expect(validateEmail("user domain@example.com")).toBe(false)
    })
})

describe("escapeHtml", () => {
    it("escapes ampersand", () => {
        expect(escapeHtml("a & b")).toBe("a &amp; b")
    })

    it("escapes less-than and greater-than", () => {
        expect(escapeHtml("<script>")).toBe("&lt;script&gt;")
    })

    it("escapes double and single quotes", () => {
        expect(escapeHtml('"test"')).toBe("&quot;test&quot;")
        expect(escapeHtml("'test'")).toBe("&#39;test&#39;")
    })

    it("escapes all special chars together", () => {
        expect(escapeHtml("<img src=\"x\" onerror='alert(1)'>")).toBe(
            "&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;"
        )
    })

    it("leaves safe text unchanged", () => {
        expect(escapeHtml("Hello World")).toBe("Hello World")
    })
})
