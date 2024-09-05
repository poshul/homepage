/*
 * Copyright (c) 2024.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { readTeamMembers } from "../../domains/team";

declare const data: string;
export { data };

export default {
    async load() {
        return readTeamMembers();
    },
};
