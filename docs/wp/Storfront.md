## Storefront Installation & Configuration

Storefront is our official WooCommerce theme, and it’s free to use.

There is an installation prompt, and a Customizer guided tour that walks you through setup of key theme elements, as of [version 2.2](https://storefront.wordpress.com/2017/02/09/storefront-2-2-design-refresh/).

### Installation

[screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-find-install.png)

The fastest way to install Storefront is through the WordPress dashboard.

1. **Go to: Appearance > Themes > Add New.**

2. **Type** ‘storefront’ in to the search box and hit enter.

3. **Hover** over the Storefront screenshot.

4. **Select** the ‘Install’ button.

5. **Activate** as you would any other WordPress theme.

To install Storefront manually:

1. **Download** the latest version of Storefront from [wordpress.org](http://wordpress.org/themes/storefront) then

2. **Upload** the extracted folder to the **/wp-content/themes/** dir on your server via FTP.

3. **Activate** Storefront from the **Appearance > Themes** screen in your dashboard.

More info at: [Using Themes](http://codex.wordpress.org/Using_Themes).

[screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-activated.png)

## Storefront and WooCommerce

On installation of Storefront, a prompt ensures that you have WooCommerce installed.

If WooCommerce is installed, it’s time to **Design Your Store.** Select **Let’s Go!**

[screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-with-woocommerce.png)

If WooCommerce is installed but not activated, or not yet **installed**, you need to Install and **Activate WooCommerce:**

[screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-no-woocommerce.png)

Once WooCommerce is installed and activated, **Design Your Store** (as above) appears.

## Customizer Guided Tour

The **Customizer Guided Tour** starts after the Design Your Store prompt and walks you through steps to help brand your store and make it yours.

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-welcome-customizer.png)

Select **Let’s Go!** to get started or **Skip the Tour.** If you skip it, the tour will be unavailable later.

### Site Identity

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-add-logo.png)

Upload a **Logo.**

Enter a **Site Title.**

Enter an optional **Tagline,** e.g., A description of your site or motto.

Upload a **Site Icon.**

Select **Next** when ready to continue.

### Typography

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-accent-color.png)
 
Select **Typography** in the menu to customize. Or **Skip This Step** if you’re fine using default options or want to come back to this later.

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-select-accent.png)

Select colors for:

- Heading

- Text

- Links

Select **Next** when ready to continue.

### Buttons

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-color-buttons.png)

Select **Buttons** in the menu to customize. Or **Skip This Step** if you’re fine using default options or want to come back to this later.

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-select-buttons.png)

Select colors for:

- Background

- Text

- Alternate button background color

- Alternate button text color

Select **Next** when ready to continue.

### Product Page

Select whether to enable/disable:

- Sticky Add-to-Cart
- Product Pagination

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/productpages-customizer.png?w=632)

### Save Changes

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-save-changes.png)

**Save & Publish** whenever you customize an option for the first time or perform an edit.

### Guided Tour Complete

A **Setup Complete** page appears when the guided tour is done, and offers further options for Storefront, such as add-ons, our special Storefront bundle and child themes.

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-setup-done.png)

### Starter Content

A fresh install of the Storefront theme will automatically perform the following actions for brand new stores with no products:

- Import example products

- Create a homepage with the Homepage template (described in the next section) and set it as the static landing page in WordPress settings

- Apply a full-width template to display the cart and checkout pages

- Remove default widgets so as to showcase the Storefront widgets

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-starter-content.png)

### Templates

Storefront comes with two extra page templates in addition to the default one: Homepage and **Full Width.**

### Homepage

The **Homepage** template is perfect for store owners, as it displays a lot of products and product categories to visitors as soon as they land on your website. This is the page template used on the [Storefront Demo](https://demo.woothemes.com/storefront/?_ga=2.119499529.1644749598.1531628065-1285620218.1531628065) and is used by default on a fresh install for brand new stores.

To manually set this up on an existing store, create a new page and add any Welcome content you wish, which is displayed above products. Then in the **Page Attributes** meta box, select **Homepage** from the **Template** dropdown. **Publish** or **Update** the page.

[storefront-homepage-template](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-homepage-template.png)

Assuming you [added some products](http://docs.woocommerce.com/document/managing-products/) to your store, you should see links to them and links to the top level product categories when visiting the page. Rearrange or hide sections using the [Storefront Homepage Control plugin.](http://docs.woocommerce.com/document/managing-products/)

To set this as your homepage, go to **Settings > Reading** in the dashboard. In the “Front page displays” section, select the “static page” option and select the page you just created from the dropdown. Save the settings.

That page you created and added the homepage page template is now loaded when anyone visits your website homepage.

[wordpress-reading-settings](https://docs.woocommerce.com/wp-content/uploads/2014/11/wordpress-reading-settings.png)

Remember, if you want to have a page to display your blog posts too, you need to create another page (leave the content blank) and set that as the **Posts Page** in the same settings section as above where we created a blank page titled **Blog** on our site and set that as the Posts Page.

[Scree-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/welcome-storefront.png)

The product categories are displayed in accordance to the order they appear in the dashboard. Change the order at **Products > Categories,** then drag and drop the categories to suit your preference. If you’re comfortable with code, there are hooks and filters to further customize these homepage components.

If you’d like to reorder the components on the homepage, use our free Homepage Control plugin. You can further customize the homepage template (product columns, titles, toggle components etc), and much more with the Storefront WooCommerce Powerpack.

### Full Width

The full width template is a standard page template without a sidebar, allowing content to span the full width of your site.

While it’s not necessary to do so, it’s probably a good idea to enable the Full Width template on the Cart and Checkout pages of your WooCommerce website to remove the sidebar from these.

[storefront-car-full-width](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-car-full-width.png)

*Storefront is purposely lean and mean which makes set up a breeze. None of the following is mandatory.

### Menus

Storefront has two menu locations, “Primary” and “Secondary”. The primary navigation appears beneath the site logo just before the content. The secondary navigation appears to the right of the site logo adjacent to the search box (assuming WooCommerce is active).

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/storefront-menus.png)

You must assign a Menu you created in WordPress to the primary navigation, or it displays each of your pages. The secondary navigation, however, displays nothing if you do not assign a menu. Therefore after activating Storefront for the first time, nothing is shown in the secondary navigation when viewing the front end of your website.

More info on creating and assigning menus to theme locations at: [WordPress.org Codex](http://codex.wordpress.org/WordPress_Menu_User_Guide): [Menu Guide](http://codex.wordpress.org/WordPress_Menu_User_Guide).

### Color scheme

In addition to Site Identity, Typography and Buttons from the Guided Tour above, the Customizer allows you to create a unique color scheme for your store. More info at: [Storefront Customizer Settings](http://docs.woocommerce.com/document/customizer-settings/).

Gain complete control of your Storefront design with [Storefront Powerpack](https://woocommerce.com/products/storefront-powerpack/?_ga=2.81748375.1644749598.1531628065-1285620218.1531628065), which has even more display options for the Customizer.

### Widget Regions

Storefront includes six widget regions.

### Below Header

Widgets placed in the header region appear directly before the main site content and beneath the header.

### Sidebar

Widgets placed in the sidebar appear to the left or the right of the main site content, depending on which layout you chose.

### Footer x 4

The four footer widget regions are arranged into equal width columns dependent on how many regions are active. For example if you have widgets in the Footer 1 region and widgets in the Footer 2 region, they are organized in two equal-width columns while Footer 3 and 4 won’t display.

[Screen-shot](https://docs.woocommerce.com/wp-content/uploads/2014/11/footer-widgets.png)

### WooCommerce integration

Storefront has been built to make it more straightforward in creating a professional appearance for your WooCommerce-powered store. It will degrade gracefully and function perfectly well as a blog theme without WooCommerce.

Assuming you are building a store, Storefront offers deep integration with WooCommerce. You need not do anything in Storefront to set it up beyond installing WooCommerce. More at: [WooCommerce](http://docs.woocommerce.com/document/installing-uninstalling-woocommerce/).