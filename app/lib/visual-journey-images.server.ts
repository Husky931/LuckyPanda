import { cache } from "react"
import fs from "fs"
import path from "path"

type Img = { src: string; alt: string }

// Use React.cache() for per-request deduplication
// This function must only be used in server components
export const getVisualJourneyImages = cache((): Img[] => {
    const dir = path.join(process.cwd(), "public", "visual_journey")
    try {
        const files = fs
            .readdirSync(dir)
            .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
            .sort((a, b) => {
                // numeric sort if files are "1.jpg", "2.webp", etc.; fallback to natural sort
                const na = parseInt(a, 10),
                    nb = parseInt(b, 10)
                if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb
                return a.localeCompare(b, undefined, {
                    numeric: true,
                    sensitivity: "base"
                })
            })

        return files.map((f) => ({
            src: `/visual_journey/${f}`,
            alt: `Visual Journey ${f.replace(/\.[^/.]+$/, "")}`
        }))
    } catch {
        return []
    }
})
