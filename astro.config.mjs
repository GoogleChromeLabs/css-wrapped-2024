/**
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from 'node:url';
import icon from "astro-icon";

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [icon()],
  vite: {
    resolve: {
      alias: {
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
      }
    }
  }
});