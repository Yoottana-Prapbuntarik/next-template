import { connect } from "react-redux";
import Navigation from "./Navigation";
import { NavigationPresenter, NavigationItems } from "./NavigationInterface";

const navigationItems: NavigationItems[] = [
    {
        keyTitle: 'หน้าหลัก',
        routePath: '/'
    },
    {
        keyTitle: 'ประเภทสินค้า',
        routePath: [
            { type: 'shirt', path:'shirt' },
            { type: 'shoes', path: 'shoes' },
        ]
    },
    {
        keyTitle: 'สินค้าทั้งหมด',
        routePath: '/product'
    },
    {
        keyTitle: 'สินค้าใหม่',
        routePath: '/'
    },
]

const navigationPresenter: NavigationPresenter = {
    navigationItems: navigationItems,
    isToggleNav: false
}

export const navigationReducer = (
    state: NavigationPresenter = navigationPresenter,
) => {

    return state
}


const mapStateToProps = (state: any) => ({
    navigationPresenter: state.navigationReducer
})

export default connect(mapStateToProps)(Navigation)