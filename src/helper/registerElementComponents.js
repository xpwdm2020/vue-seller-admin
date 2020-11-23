import {
  Row,
  Col,
  Dialog,
  Radio,
  Progress,
  Rate,
  Tag,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Header,
  Button,
  Container,
  Aside,
  Main,
  Table,
  TableColumn,
  Input,
  Form,
  FormItem,
  Message,
  Select,
  Option,
  MessageBox,
  Loading,
  Upload,
  Pagination,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  InputNumber,
  PageHeader,
} from "element-ui";
export default (Vue) => {
  Vue.prototype.$message = Message;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(PageHeader);
  Vue.use(Rate);
  Vue.use(Progress);
  Vue.use(Pagination);
  Vue.use(InputNumber);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Upload);
  Vue.use(Loading);
  Vue.use(Option);
  Vue.use(Select);
  Vue.use(Input);
  Vue.use(FormItem);
  Vue.use(Form);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(Breadcrumb);
  Vue.use(Radio);
  Vue.use(BreadcrumbItem);
  Vue.use(Button);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Aside);
  Vue.use(Main);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Menu);
  Vue.use(Tag);
  Vue.use(Card);
  Vue.use(Dialog);
  Vue.use(Submenu);
};
