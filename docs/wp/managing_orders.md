---
id: managing-orders
title: Managing Orders
sidebar_label: Managing Orders
---

### Managing Orders

Orders are created when a customer completes the checkout process, and they are visible by Admin and Shop Manager users only. Each order is given a unique Order ID.

> Order IDs are like Post IDs and are non-sequential. For sequential order numbers, you can use ![Sequential Order Numbers Pro.](http://woocommerce.com/products/sequential-order-numbers-pro/?_ga=2.86880024.1644749598.1531628065-1285620218.1531628065)

An order also has a **Status**. Order statuses let you know how far along the order is, starting with Pending and ending with Complete. The following order statuses are used:

- **Pending payment** – Order received (unpaid)

- **Failed** – Payment failed or was declined (unpaid). Note that this status may not show immediately and instead show as Pending until verified (i.e., PayPal)

- **Processing** – Payment received and stock has been reduced – the order is awaiting fulfillment. All product orders require processing, except those that only contain products which are both [Virtual and Downloadable](https://docs.woocommerce.com/document/digitaldownloadable-product-handling/).

- **Completed** – Order fulfilled and complete – requires no further action

- **On-Hold** – Awaiting payment – stock is reduced, but you need to confirm payment

- **Cancelled** – Cancelled by an admin or the customer – no further action required (Cancelling an order does not affect stock quantity by default)

- **Refunded** – Refunded by an admin – no further action required
More about how order statuses relate to payment gateways in the Troubleshooting section.

More about the different emails that are automatically sent at Email Settings.

> If you are using PayPal and orders are staying in Pending, you may have an IPN issue. See the troubleshooting section at [Debugging IPN Issues](https://docs.google.com/presentation/d/18TI41-mpp7TyfM1og9h_ZJlmO-cxAos9XYRhnlG4GKU/edit?usp=sharing).

### Diagram of order statuses

This visual representation follows an order from Pending to Completed, Canceled or Refunded.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/woocommerce-order-process-diagram.png?w=950)

### Viewing orders

When you start taking orders, the **Orders** management page begins to fill up. View these at: **WooCommerce > Orders.**

Each row displays useful details, such as order number and customer name, date of purchase, order status, shipping address, and purchase total.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/woo-orders-management.png)

Should you need more or less information on the **Orders** page, you can open **Screen Options** at the top right corner. A panel opens.

Select which **Columns** and how many **Items** you want displayed on each page, then **Apply.**

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/order-columns-pagination.png)

**Filter** orders by **Date (month/year)** or **Search** for a (registered) **Customer.**

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/filter-date-search-customers.png)

**Arrange** orders in **ascending** or **descending** order by **Order** number, **Date** or **Total** by clicking the heading.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/arrange-orders.png)

Click the order number and customer name to see the **Single Order page,** where you can also **Edit** order details, **Update Status**, and **Add Notes.**

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/single-order-page.png)

Order rows have a **Preview** ‘eye’.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/order-preview.png)

Clicking **Preview** opens a **Modal,** containing order number, order status, billing/shipping details, items ordered, payment method, and the option to change/edit order status.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/order-modal.png)

**Order Statuses** are color-coded and descriptive.

- Canceled – Grey

- Completed – Blue

- Failed – Red

- On Hold – Orange

- Pending Payment – Grey

- Processing – Green

- Refunded – Grey

Hovering over an order **Status** displays **Notes** made on the order.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/hover-order-status.png)

At the end of a row are shortcut buttons to quickly mark orders as **Processing** or **Complete.**

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/orders-shortcut-buttons.png)

### Editing/viewing single orders

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/single-order-page.png)

From the **Single Order** page not only can you view all order data, but also edit and update.

- Change the order status

- Edit order items – modify the product, prices, and taxes

- Stock – Reduce and restore stock for an order

- Order Actions – Email order details to customer (handy if manually creating an order for your customers) or Regenerate download permissions

- Modify product **Meta** to edit product variations by removing and adding meta

- Apply coupons. You will need to know the coupon code to apply to the order. Coupon usage counts are tracked, and coupons can also be removed from orders. Note: the order must be unpaid for coupons to have an affect

- Add fee. You can enter an amount or percentage to add a fee to an order. Negative fees will apportion taxes between all other items, and will not make the cart total go below zero

### Order Data

The **Order Data** panel lets you modify the order status, view (or change) the customer’s order note, and change which user the order is assigned to.

You can also find customer billing and shipping addresses, along with a link to view other purchases the customer may have had in the past. To **edit** addresses, click Edit and a form appears. Once saved, the new address is displayed in a localized format.Screen Shot 2015-02-06 at 14.54.12

![Screen-shot](http://docs.woocommerce.com/wp-content/uploads/2013/05/Screen-Shot-2015-02-06-at-14.54.12.png)

### Order Items

> **Note**: To edit the order, the status must be set to On Hold or Pending Payment.

The next panel on the order page is the **Order Items** panel. It lists items in the order, quantities, and prices.

![Screen-shot](http://docs.woocommerce.com/wp-content/uploads/2013/05/Screen-Shot-on-2015-02-06-at-14-48-53.png)

The editable parts of line items include:

- **Tax Class** – Tax class for the line. This may be adjusted if, for example, the customer is tax exempt.

- **Quantity** – Number of items the user is purchasing

- **Line Subtotal** – Line price and line tax before pre-tax discounts

- **Line Total** – Line price and line tax after pre-tax discounts

- **Add Meta** – Add and remove meta to change product variable options.

- **Sorting** – Sort by Item, Cost, Quantity, and Total by clicking on the respective listed items.

It’s also possible to add additional fees for items. Select **Add Fee** and enter fee name, tax status and amount:

![Screen-shot](http://docs.woocommerce.com/wp-content/uploads/2013/05/wc_2-1_add_order_fee.png)

To add custom meta fields, use the **Custom Fields** metabox:

![Screen-shot](http://docs.woocommerce.com/wp-content/uploads/2013/05/wc_2-1_custom_fields.png)

### Order Totals

Order Totals stores totals and tax for the order. Enter these values yourself or have them partially calculated for you using the ‘**calc totals**‘ button. Totals comprise:

- Cart Discount – pre-tax discounts. Can be auto-calculated.

- Order Discount – post-tax discounts. Need to be input manually.

- Shipping cost – cost excluding tax

- Shipping method – name of the method

- Cart tax

- Shipping tax

- Order total

- Payment method – name of the payment method used

There are two buttons available on this panel –**calc taxes** and calc totals. Calculating taxes will use your prices, and calculate tax based on the customer’s shipping address. If the customer’s address has not been input, it defaults to the store’s base location.

There is also a section called tax rows, which is where to define and name multiple tax rows. This is useful if, for example, you charge multiple taxes or use compound taxes. Values are displayed on the customer invoice.

### Order/Customer Notes

The **Order Notes** panel displays notes attached to the order and can be used for storing event details, such as payment results or reducing stock levels, or adding notes to the order for customers to view. Some payment gateways also add notes for debugging.

Notes can be a powerful tool for communicating with customers. Need to add a tracking number for shipping? Is stock delayed? Add a customer note, and they are automatically notified.

Order notes example

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/2017-01-31_10-32-40.png)

To send a note to a customer on an order, enter the note, then select: **Note to Customer > Add**.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/order-note-to-customer.png?w=465)

The following note types are possible:

- **Purple**: System status notices, such as payment gateway details.

- **Grey**: General status updates, such as status changes or private notes. Customers do not see these notes, but may receive notification of them, e.g., When status changes from processing to completed, an email may be sent (depending on your settings).

- **Blue**: Notes to the customer. Customers receive notes via email, but can view them by viewing an order, or using the WooCommerce order tracking page.

### Adding an Order Manually

To add an order:

- Go to:**WooCommerce > Orders.**

- Use **Add New** at the top of the page. The Single Order page appears.

- **Input** customer details, add line items, apply coupons, apply fees and calculate totals.

- **Set a status** for the new order, e.g., If it needs to be paid, use ‘Pending’.

- **Save.**

Use the **Order Actions** dropdown to Email order details to the customer with payment instructions.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/resend_order.png)

Note that adding an order manually has no effect on stock/inventory. You would need to manually subtract or adjust inventory for those items.

### Paying for an Order

Customers can pay for orders assigned to them by logging into the site (if required).

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/payorder-woocommerce.png)

An info message will appear if customers attempt to pay for orders not belonging to them.

### Refunding Orders

Starting with WooCommerce 2.2+, it is possible to issue refunds directly from WooCommerce if your payment gateway allows it.

For more information about Manual and Automatic Refunds, see WooCommerce Refunds.

### Removing Personal Data

Starting with WooCommerce 3.4+ it is possible to remove customer data. On the Orders screen, under Bulk Actions there is a “Remove personal data” option that will remove the data for the orders selected:

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/remove-personal-data.png)

Please note, that once you press Apply this will remove personal data with no further warning. Orders will appear on the Orders screen like this:

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/deleted.png)

On an individual order, data is updated like this:

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/deleted2.png)

- **Failed, pending,** and **canceled** orders which get cleaned up will be moved to the trash.

- **Completed** orders which get cleaned up will be anonymized so sales stats are unaffected (as above).

- **Inactive accounts** will be deleted. An inactive account is one which has not been logged in to, or which has not placed orders, for the specified time.

This can also automatically be set to be done under **WooCommerce > Settings > Accounts & Privacy**, in the Account erasure requests section and the Personal data retention section:

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/data-retention.png)

If enabled, this cleanup will run via a daily cron job. Inactive accounts are tracked using meta data, and only subscribers/customer accounts are removed. An upgrade routine will set all account last active times to the time you updated to 3.4.

### Multi-Site Orders

Starting with WooCommerce 3.4+ there is now a widget that appears under Dashboard that shows order information from across all sites. You can click on an order to be taken to the details of the order on that site.

![Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2013/05/multisite.png)