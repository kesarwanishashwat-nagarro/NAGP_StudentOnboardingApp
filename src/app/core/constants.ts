import { INavItem } from './model/models';

export class Constants {
    public static categories = ['Domestic', 'International'];
    public static localstorageKeys = {
        personName: 'personName',
        appToken: 'appToken'
    }
    public static routes = {
        onboard: 'student/onboard/',
        login: '/login'
    }

    public static onboard = {
        calenderDarkBlue: 'theme-dark-blue',
        docResolverkey: 'documents',
        studentResolverKey: 'student',
        dateFormat: 'MMMM Do YYYY'
    }

    public static messages = {
        deleteStudent: 'Successfully Removed the student',
        updateStudent: 'Successfully updated the student',
        createStudent: 'Successfully added the student'
    }

    public static common = {
        emptyString: '',
        slash: '/'
    }

    public static navItems = <INavItem[]>[{
        name: 'Dashboard',
        link: '/student/dashboard',
        identifier: 'dashboard'
    }, {
        name: 'Onboard Students',
        link: '/student/onboard',
        identifier: 'onboard'
    }]

    public static searchPipe = {
        searchText: 'searchText',
        searchField: 'searchField'
    }
}