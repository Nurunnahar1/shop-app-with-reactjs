export function createSlug(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

export const dataFix = (data) => {
    return {
        ...data,
        status: true,
        trass: false,
        createdAt: Date.now(),
        updatedAt: null,
    };
};