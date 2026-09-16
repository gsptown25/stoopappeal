import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Menu, n as Truck, o as Camera, s as CalendarDays, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CTSkDgsN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-32 bg-paper px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-2 overflow-hidden rounded-lg lg:order-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/about.jpg",
					alt: "Mara Quinn arranging white and blush pumpkins on a Portland craftsman porch.",
					className: "aspect-[4/5] w-full object-cover object-top"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 lg:order-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta",
						children: "About us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl",
						children: "I am so glad you are here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm Mara Quinn — the person who will text you the morning of your install, who will stand in the drizzle deciding whether the Fairytale belongs on the second step or the third, and who still does a quiet little turn when a stoop looks exactly right." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I started dressing my own Eastmoreland porch in 2016, after too many October weekends spent hauling pumpkins from farm stands and second-guessing the arrangement in the dark. Friends asked. Then their neighbors asked. In 2022 I stopped calling it a favor." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Stoop Appeal does one thing: the Fall Harvest Deluxe. Not a menu of diminishing packages. Not a drop-and-go pile. A full, considered harvest composed for your entry, left through Thanksgiving, then collected and composted with a farm outside the city." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I live here. I know the light on Irvington stoops at four in the afternoon in October. I would be honored to do yours." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-2xl italic text-ink",
						children: "Mara Quinn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted",
						children: "Founder, Stoop Appeal · Portland, Oregon"
					})
				]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-terracotta text-paper shadow-border hover:bg-terracotta-hover",
			outline: "bg-paper text-ink shadow-border hover:shadow-border-hover",
			ghost: "bg-transparent text-ink hover:bg-cream",
			cream: "bg-cream text-ink hover:bg-paper"
		},
		size: {
			default: "h-11 rounded-md px-5 text-sm",
			sm: "h-9 rounded-md px-3.5 text-xs tracking-[0.14em] uppercase",
			lg: "h-12 rounded-md px-7 text-[0.95rem]",
			pill: "h-11 rounded-full px-6 text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type = "text", ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		suppressHydrationWarning: true,
		className: cn("flex h-11 w-full rounded-md bg-cream px-3.5 text-sm text-ink shadow-border transition-[box-shadow] duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/30 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn("flex min-h-28 w-full rounded-md bg-cream px-3.5 py-3 text-sm text-ink shadow-border transition-[box-shadow] duration-200 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/30 disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var WEEKS = [
	"Week of September 21, 2026",
	"Week of September 28, 2026",
	"Week of October 5, 2026",
	"Week of October 12, 2026",
	"Week of October 19, 2026"
];
var NEIGHBORHOODS = [
	"Irvington",
	"Laurelhurst",
	"Eastmoreland",
	"Sellwood / Westmoreland",
	"Alberta / Concordia",
	"Pearl / Northwest",
	"Lake Oswego",
	"West Linn",
	"Beaverton",
	"Other — tell us in the notes"
];
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var EMPTY = {
	name: "",
	email: "",
	phone: "",
	address: "",
	neighborhood: "",
	week: "",
	notes: ""
};
function Book() {
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [error, setError] = (0, import_react.useState)(null);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function update(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		if (!form.name.trim()) return setError("Please add your name.");
		if (!EMAIL_RE.test(form.email.trim())) return setError("Please add a valid email.");
		if (!form.phone.trim()) return setError("Please add a phone number.");
		if (!form.address.trim()) return setError("Please add your street address.");
		if (!form.neighborhood) return setError("Please choose a neighborhood.");
		if (!form.week) return setError("Please choose an install week.");
		const booking = {
			...form,
			package: "Fall Harvest Deluxe",
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const existing = JSON.parse(localStorage.getItem("stoop-bookings") || "[]");
			localStorage.setItem("stoop-bookings", JSON.stringify([...existing, booking]));
		} catch {}
		setError(null);
		setSubmitted(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "scroll-mt-32 bg-cream px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta",
					children: "Fall 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl",
					children: "Reserve your week."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1.02rem] leading-relaxed text-muted",
					children: "Fall Harvest Deluxe is our only offering, and we take a limited number of stoops each week. Tell us about your entry — we'll confirm within two business days."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 space-y-5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "uppercase tracking-[0.16em] text-muted",
							children: "The package"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-ink",
							children: "Fall Harvest Deluxe · $1,450"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "uppercase tracking-[0.16em] text-muted",
							children: "Service area"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-ink",
							children: "Greater Portland. Travel beyond the metro by request."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "uppercase tracking-[0.16em] text-muted",
							children: "Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@stoopappeal.com",
								className: "text-ink underline decoration-line underline-offset-4 hover:text-terracotta",
								children: "hello@stoopappeal.com"
							})
						})] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-paper p-6 shadow-border sm:p-8 md:p-10",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-80 flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta",
							children: "You're on the list"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-3xl font-medium tracking-tight text-ink",
							children: "We'll be in touch within two business days."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
							children: "A note is on its way to confirm your Fall Harvest Deluxe and install week. If anything about the stoop needs a second look, Mara will ask for a photo then."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							className: "mt-8 w-fit",
							onClick: () => {
								setForm(EMPTY);
								setSubmitted(false);
							},
							children: "Book another stoop"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-4 sm:grid-cols-2",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							className: "sm:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								autoComplete: "name",
								value: form.name,
								onChange: (event) => update("name", event.target.value),
								placeholder: "Mara Quinn"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							className: "sm:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email",
								value: form.email,
								onChange: (event) => update("email", event.target.value),
								placeholder: "you@example.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							className: "sm:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "phone",
								name: "phone",
								type: "tel",
								autoComplete: "tel",
								value: form.phone,
								onChange: (event) => update("phone", event.target.value),
								placeholder: "(503) 555-0148"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Install week",
							className: "sm:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								id: "week",
								value: form.week,
								onChange: (value) => update("week", value),
								placeholder: "Choose a week",
								options: WEEKS
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Street address",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "address",
								name: "address",
								autoComplete: "street-address",
								value: form.address,
								onChange: (event) => update("address", event.target.value),
								placeholder: "1842 NE 22nd Avenue"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Neighborhood",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								id: "neighborhood",
								value: form.neighborhood,
								onChange: (value) => update("neighborhood", value),
								placeholder: "Choose a neighborhood",
								options: NEIGHBORHOODS
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Notes for Mara",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "notes",
								name: "notes",
								value: form.notes,
								onChange: (event) => update("notes", event.target.value),
								placeholder: "Steps, pets, gate codes, a favorite pumpkin color…"
							})
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sm:col-span-2 text-sm text-terracotta",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2 mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "w-full sm:w-auto",
								children: "Book Now"
							})
						})
					]
				})
			})]
		})
	});
}
function Field({ label, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `flex flex-col gap-1.5 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted",
			children: label
		}), children]
	});
}
function Select({ id, value, onChange, placeholder, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		id,
		name: id,
		value,
		onChange: (event) => onChange(event.target.value),
		className: "flex h-11 w-full rounded-md bg-cream px-3.5 text-sm text-ink shadow-border transition-[box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: placeholder
		}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option,
			children: option
		}, option))]
	});
}
function StoopMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: cn("size-7 text-terracotta", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "16.5",
				width: "18",
				height: "3.2",
				rx: "0.4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "6.2",
				y: "12.2",
				width: "11.6",
				height: "3.2",
				rx: "0.4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9.4",
				y: "7.9",
				width: "5.2",
				height: "3.2",
				rx: "0.4",
				fill: "currentColor"
			})
		]
	});
}
function BrandMark({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("group flex items-center gap-2.5 text-ink", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoopMark, { className: "transition-transform duration-200 group-hover:-translate-y-px" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-display font-medium tracking-tight", compact ? "text-[1.45rem] leading-none" : "text-[1.7rem] leading-none"),
			children: "Stoop Appeal"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-sm leading-relaxed text-muted",
				children: "Portland's porch concierge. One harvest, done completely."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap items-center gap-x-8 gap-y-3",
				"aria-label": "Footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink/80 hover:text-terracotta",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about",
						className: "text-[0.75rem] font-medium uppercase tracking-[0.16em] text-ink/80 hover:text-terracotta",
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#book",
						className: "text-[0.75rem] font-medium uppercase tracking-[0.16em] text-terracotta hover:text-terracotta-hover",
						children: "Book Now"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Stoop Appeal · Portland, Oregon"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:hello@stoopappeal.com",
					className: "hover:text-ink",
					children: "hello@stoopappeal.com"
				})]
			})
		})]
	});
}
var SHOTS = [
	{
		src: "/images/gallery-victorian.jpg",
		alt: "A cream Victorian porch with a deluxe pumpkin cascade down a long stoop of stairs.",
		caption: "Laurelhurst",
		className: "md:col-span-2 md:row-span-2"
	},
	{
		src: "/images/gallery-modern.jpg",
		alt: "A modern black-door entry styled with a monochromatic white and cream pumpkin display.",
		caption: "Eastmoreland",
		className: ""
	},
	{
		src: "/images/still-life.jpg",
		alt: "Still life of cream, blush, sage, and terracotta heirloom pumpkins with dried eucalyptus.",
		caption: "The harvest",
		className: ""
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta",
					children: "Recent installs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl",
					children: "A few of this season's stoops."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted",
					children: "Cream, blush, sage, and a measured amount of classic orange — composed to the architecture, never dropped in a pile."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2 md:gap-4",
				children: SHOTS.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: `group relative overflow-hidden rounded-lg bg-line ${shot.className}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: shot.src,
						alt: shot.alt,
						className: "size-full min-h-64 object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] md:min-h-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink",
						children: shot.caption
					})]
				}, shot.src))
			})]
		})
	});
}
var NAV = [{
	href: "#services",
	label: "Services"
}, {
	href: "#about",
	label: "About Us"
}];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	function closeMenu() {
		document.body.style.overflow = "";
		setOpen(false);
	}
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink/80 transition-colors duration-200 hover:text-terracotta",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "pill",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							children: "Book Now"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative flex size-11 items-center justify-center rounded-md text-ink md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((value) => !value),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						strokeWidth: 1.75
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "size-5",
						strokeWidth: 1.75
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-x-0 top-[4.25rem] bottom-0 z-40 bg-paper px-6 py-10 md:hidden", open ? "flex flex-col" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-2",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: closeMenu,
					className: "flex min-h-12 items-center font-display text-3xl text-ink",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#book",
					onClick: closeMenu,
					className: "mt-6 inline-flex h-12 items-center justify-center rounded-md bg-terracotta text-sm font-medium text-paper",
					children: "Book Now"
				})]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative",
		"aria-labelledby": "hero-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[min(88vh,54rem)] w-full overflow-hidden bg-cream",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "A Portland craftsman stoop styled with white, cream, blush, and terracotta heirloom pumpkins cascading down wooden steps.",
					className: "absolute inset-0 size-full object-cover object-[center_70%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-ink/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 p-4 sm:p-7 md:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl rounded-lg bg-paper/95 p-6 shadow-lift sm:p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta",
								children: "Portland porch concierge"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								id: "hero-heading",
								className: "mt-3 font-display text-[2.35rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[3.35rem]",
								children: "The most beautiful stoop on the block."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted",
								children: "One offering, done completely. The Fall Harvest Deluxe is designed, delivered, and styled for your entry — then collected when the season turns."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#book",
										children: "Book Now"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#services",
										children: "See the package"
									})
								})]
							})
						]
					})
				})
			]
		})
	});
}
var STEPS = [
	{
		icon: CalendarDays,
		title: "Reserve your week",
		body: "A few October install windows remain for 2026. Book now and we confirm within two business days."
	},
	{
		icon: Camera,
		title: "We design to your stoop",
		body: "Send a photo of your entry. We compose the harvest to the architecture — steps, planters, and all."
	},
	{
		icon: Truck,
		title: "Install, enjoy, we collect",
		body: "We style on site. You live with it through Thanksgiving. Then we haul it to a farm for compost."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[min(52vh,28rem)] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/harvest.jpg",
					alt: "White, cream, and terracotta pumpkins stacked in crates and woven baskets, ready for a porch install.",
					className: "size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-6 left-5 font-display text-3xl text-paper sm:left-8 sm:text-4xl",
					children: "How it works."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3 md:gap-8 md:py-20",
			children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-md bg-paper text-terracotta shadow-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
								className: "size-4",
								strokeWidth: 1.75,
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted",
							children: ["Step 0", index + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-2xl font-medium tracking-tight text-ink",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: step.body
					})
				]
			}, step.title))
		})]
	});
}
var INCLUDED = [
	"2 Grand Prize heirloom pumpkins",
	"10 large jack-o'-lanterns",
	"8 medium pumpkins",
	"10 white ghost pumpkins",
	"16 specialty heirlooms — Fairytale, Jarrahdale, Porcelain Doll, Cinderella",
	"Assorted pie pumpkins and minis",
	"2 hay bales and seasonal mums",
	"Dried floral accents, composed on site",
	"Design, delivery, and professional styling",
	"End-of-season removal, composted with a local farm"
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "scroll-mt-32 bg-paper px-5 py-20 sm:px-8 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/package.jpg",
					alt: "A grand Fall Harvest Deluxe install flanking black double doors with prize pumpkins, hay, and rust mums.",
					className: "aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-terracotta",
					children: "The offering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl font-medium tracking-tight text-ink sm:text-[3.15rem]",
					children: "Fall Harvest Deluxe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1.05rem] leading-relaxed text-muted",
					children: "Our only package — a full, artful harvest composed for your stoop. Heirlooms in cream, blush, sage, and classic orange, styled on site and left to carry you from the first cool morning through Thanksgiving."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-display text-5xl font-medium tracking-tight text-ink",
					children: "$1,450"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Design, delivery, styling, and removal included. Portland metro."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-2.5",
					children: INCLUDED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm leading-snug text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 size-4 shrink-0 text-terracotta",
							strokeWidth: 2,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							children: "Book Now"
						})
					})
				})
			] })]
		})
	});
}
var QUOTES = [
	{
		quote: "Neighbors slowed their walk. That is when I knew.",
		by: "Irvington"
	},
	{
		quote: "It looked as if it had always belonged there.",
		by: "Eastmoreland"
	},
	{
		quote: "The last thing I wanted to think about in October. They handled all of it.",
		by: "Lake Oswego"
	}
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-sm",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink text-center text-[0.68rem] font-medium uppercase tracking-[0.18em] text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-2.5",
					children: "Fall 2026 is open — a few October weeks remain"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-line bg-paper px-5 py-14 sm:px-8 sm:py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl md:text-[2.15rem]",
							children: "We bring the harvest to your stoop — then take it away when the season turns."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-line bg-paper px-5 py-16 sm:px-8 sm:py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8",
							children: QUOTES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-2xl leading-snug text-ink",
									children: [
										"“",
										item.quote,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
									className: "mt-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted",
									children: item.by
								})]
							}, item.by))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
