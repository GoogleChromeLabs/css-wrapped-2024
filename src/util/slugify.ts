/**
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export default function (title: string) {
    if (!title) {
        return "NOT SET";
    }
    return (
        title
        // remove leading & trailing whitespace
        .trim()
        // remove code tags
        .replaceAll('<code>', '')
        .replaceAll('</code>', '')
        // remove code tags
        .replaceAll('&lt;', '')
        .replaceAll('&gt;', '')
        // remove special characters
        .replace(/[^A-Za-z0-9 ]/g, '')
        // replace spaces
        .replace(/\s+/g, '-')
        // remove leading & trailing separtors
        .replace(/^-+|-+$/g, '')
        // output lowercase
        .toLowerCase()
    )
}