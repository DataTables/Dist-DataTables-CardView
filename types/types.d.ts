import DataTables__default, { Dom, Api, Context } from 'datatables.net';
export * from 'datatables.net';
export { default } from 'datatables.net';

declare module 'datatables.net' {
    interface Context {
        _cardView: CardView;
    }
    interface Row {
        _card: Dom;
    }
    interface DataTablesStatic {
        /**
         * CardView class
         */
        CardView: typeof CardView;
    }
    interface StateLoad {
        cardView?: {
            mode: Mode;
        };
    }
}
type Mode = 'auto' | 'cards' | 'table';
interface Defaults {
    /**
     * Content width breakpoints for the columns. If the content width is
     * greater or equal to the first value, `huge` will be used from `columns`.
     * The second entry corresponds to `large`, then `medium`, `small` and
     * `tiny` in sequence. The last value should be 0.
     */
    breakpoints: [number, number, number, number, number];
    /**
     * Column selector for repeating templates
     */
    columns: string | number | Array<string | number>;
    /**
     * Define the number of columns that should be shown at each breakpoint. Can
     * also be given as a single number, although be aware that will be used
     * for all screen sizes.
     */
    gridColumns: {
        huge: number;
        large: number;
        medium: number;
        small: number;
        tiny: number;
    };
    /**
     * Display mode that CardView (and thus also the DataTable) should enter
     * into on start up.
     */
    mode: Mode;
    /**
     * Orthogonal data access data type. This is passed to the rendering
     * function for the column. By default it will match the DataTable `display`
     * option (i.e. what is shown in matching DataTable cell), but it can be set
     * separately if you want to show something different for the card view.
     */
    orthogonal: string;
    /**
     * Page length fitting method
     */
    pageLength: 'fit' | 'core';
    /**
     * Point at which CardView will automatically display rather than the table.
     * This is only relevant when the display mode is `auto`.
     */
    responsiveBreakpoint: keyof Defaults['gridColumns'] | number | true;
    /**
     * The card view template to use.
     */
    template: string | Node | Dom | null | (() => Dom);
}
interface Classes {
    /** CardView container */
    container: string;
    /** Card element */
    card: string;
    /** Liner element for cards */
    cardContent: string;
    /** Data element (multiple per data) */
    data: string;
    /** Applied to the container when cards should be selectable */
    selectable: string;
    /** Selector element */
    selector: string;
    /** Class when card (and source row) is selected */
    selected: string;
    /** Applied to the DT container when CardView is active */
    shown: string;
    /** Title element (multiple per card) */
    title: string;
}
type Template = string | Node | Dom | null | (() => Dom);

/*! CardView for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

declare class CardView {
    /** Class names used by CardView for customisation */
    static classes: Classes;
    /** Defaults */
    static defaults: Defaults;
    /** CardView version */
    static version: string;
    static templates: Record<string, Template>;
    /** SVG icons that can be used by the content plugins */
    static icons: {
        tick: string;
    };
    /**
     *
     * @returns Determine if card view is shown or not
     */
    displayed(): boolean;
    /**
     * Show the card view and hide the table
     */
    mode(): Mode;
    mode(mode: Mode): this;
    private c;
    private dom;
    private s;
    classes: Classes;
    constructor(dtIn: Api | Context, opts?: Partial<Defaults>);
    /**
     * Calculate the number of columns that should be shown
     */
    private _columns;
    /**
     * Show the card view and hide the table
     */
    private _display;
    private _destroy;
    /**
     * Draw the cards for the current page
     */
    private _draw;
    /**
     * Hide the card view and switch back to the table
     */
    private _hide;
    /**
     * Initialise the instance
     */
    private _init;
    /**
     * Update page lengths to fit the card grid.
     */
    private _pageLength;
    /**
     * Set the number of columns to use for the display, based on the width
     * of the table's viewport.
     *
     * This works by setting a CSS property, thus allowing any number of columns
     * without needing lots of (almost) duplicate CSS.
     */
    private _resize;
    /**
     * Event handlers for syncing row selection between CardView and the table
     */
    private _selectEvents;
    /**
     * Update CardView for the table selection mode changing
     */
    private _selectMode;
    /**
     * Set a matched attribute's value based for an element, matched from the
     * host element and its children.
     *
     * @param el Element (and children) to search for the given attribute
     * @param attr Attribute to search for
     * @param value Value to apply
     */
    private _templateAttr;
    /**
     * Set the HTML content of an element with a given data attribute
     *
     * @param el Element (and children) to search for the given attribute
     * @param attr Attribute to search for
     * @param value Content to set
     */
    private _templateHtml;
    /**
     * Take a template and complete any "macro" attributes, preparing it for use
     * as the card template
     *
     * @returns An element that can be used as the template source to be cloned
     *   and filled in for each record to be displayed.
     */
    private _templatePrep;
    /**
     * When a row is to be displayed, we need to create the card and display it.
     *
     * @param row The DataTables API instance for the row being rendered
     */
    private _renderCard;
    private _updateCard;
    private _cardData;
}

// Type definitions for DataTables CardView



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * DataTables' types integration
 */
declare module 'datatables.net' {
	interface Config {
		/**
		 * cardView extension options
		 */
		cardView?: boolean | Partial<Defaults>;
	}

	interface Api<T> {
		/**
		 * CardView methods container
		 *
		 * @returns Api for chaining with the additional cardView methods
		 */
		cardView: ApiCardView<T>;
	}

	interface DataTablesStatic {
		/**
		 * CardView class
		 */
		CardView: CardView;
	}

	interface StateLoad {
		cardView?: {
			mode: Mode;
		}
	}
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * API
 */

interface ApiCardView<T> {
	(): ApiCardViewMethods<T>;
}

interface ApiCardViewMethods<T> extends Api<T> {
	/**
	 * Determine if the cards or table is shown
	 *
	 * @returns `true` if in card view, `false` if the table is displayed.
	 */
	displayed(): boolean;

	/**
	 * Set the mode CardView is operating in
	 *
	 * @returns Operating mode
	 */
	mode(): Mode;

	/**
	 * Get the mode CardView is operating in
	 *
	 * @param mode Operating mode to activate
	 * @returns DataTables Api instance
	 */
	mode(mode: Mode): Api<T>;
}
