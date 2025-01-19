import "./NewOrder.css";
import {Table} from "antd";
import {useState} from "react";
import { Eye, User } from "../../Assets/SVGS";
import { useTranslation } from "react-i18next";
function NewOrder() {
  const {t} = useTranslation()
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [pageSize, setPageSize] = useState(5); // Number of rows per page

  // Mock data
  const allData = [
    {
      key: "1",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "2",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "3",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "4",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "5",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "6",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "7",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
    {
      key: "8",
      client: {name: "asdasd", email: "asdasd@sddsd.com"},
      status: "طلب جديد",
    },
  ];

  // Calculate visible data based on pagination
  const paginatedData = allData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Columns
  const columns = [
    {
      title: t("client"),
      dataIndex: "client",
      key: "client",
      render: (text) => (
        <div className="client">
          <div className="icon">
            <User color="black" width="30px"/>
          </div>
          <div className="info">
            <span>{text.name}</span>
            <a href="/#" style={{color: "black", fontSize: "18px" ,fontWeight:"bold"}}>{text.email}</a>
          </div>
        </div>
      ),
    },
    {
      title: t("order_status"),
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <button className="statusBtn" style={{padding: "5px 10px"}}>
          {/* {status} */}
          {t("new_order")} 
        </button>
      ),
    },
    {
      title: t("tools"),
      key: "tools",
      render: () => (
        <div className="statusIcon">
          <Eye color="black" />
        </div>
      ),
    },
  ];

  return (
    <div className='newOrder-container'>
      <div className='newOrder-content'>
        <div className='header'>
          <div className='info'>
            <h2>({allData.length}){t("new_orders")} </h2>
            <p>{t("manage_your_customers'_orders")}</p>
          </div>
          <button>{t("show_all")}</button>
        </div>
        <div className='data' 
        >
          <Table
            columns={columns}
            dataSource={paginatedData}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: allData.length,
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setPageSize(pageSize);
              },
              showSizeChanger: true,
            }}
            bordered
            style={{textAlign: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
export default NewOrder;
