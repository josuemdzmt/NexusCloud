export function getChildren(item) {
    return item.subMenus || item.subMenusTwo || [];
}

export function isParent(item) {
    return getChildren(item).length > 0;
}

export function toggle(item, siblings) {
    const willOpen = !item.showSubRoute;
    siblings.forEach((sibling) => {
        if (sibling !== item) sibling.showSubRoute = false;
    });
    item.showSubRoute = willOpen;
}

export function containsActiveRoute(item, currentPath) {
    if (item.route) return item.route === currentPath;
    return getChildren(item).some((child) => containsActiveRoute(child, currentPath));
}

export function expandActivePath(menuGroups, currentPath) {
    function walk(items) {
        let branchActive = false;
        items.forEach((item) => {
            const children = getChildren(item);
            const childActive = children.length ? walk(children) : false;
            item.showSubRoute = childActive;
            if (childActive || item.route === currentPath) branchActive = true;
        });
        return branchActive;
    }
    menuGroups.forEach((group) => walk(group.menu));
}
