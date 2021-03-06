const minimumTeachings = (n, languages, friendships) => {
    let ln = languages.length;
    let canCommunicate = initialize2DArrayNew(ln, n);
    for (let l = 0; l < ln; l++) {
        for (const x of languages[l]) {
            canCommunicate[l][x - 1] = true;
        }
    }

    let set = new Set();
    for (const fr of friendships) {
        let a = fr[0] - 1;
        let b = fr[1] - 1;
        let flag = false;
        for (const x of languages[a]) {
            if (canCommunicate[b][x-1]) flag = true;
        }
        if (flag) continue;
        set.add(a);
        set.add(b);
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let teach = 0;
        for (const user of set) {
            if (!canCommunicate[user][i]) teach++;
        }
        res = Math.min(res, teach);
    }
    return res;
};

const initialize2DArrayNew = (m, n) => {
    let data = [];
    for (let i = 0; i < m; i++) {
        let tmp = new Array(n).fill(false);
        data.push(tmp);
    }
    return data;
}