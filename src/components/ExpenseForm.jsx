// React imports
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

// Library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddExpenseForm = ({ budgets }) => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";
    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if (!isSubmitting) {
            // Clear form and reset focus
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmitting]);

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Add New{" "}
                <span className="accent">
                    {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
                </span>{" "}
                Expense
            </h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef}
            >
                <div className="expense-inputs">
                    {/* Expense Name Input */}
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input
                            type="text"
                            name="newExpense"
                            id="newExpense"
                            placeholder="e.g., Coffee"
                            ref={focusRef}
                            required
                        />
                    </div>

                    {/* Expense Amount Input */}
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input
                            type="number"
                            step="0.01"
                            inputMode="decimal"
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            placeholder="e.g., 3.50"
                            required
                        />
                    </div>
                </div>

                {/* Budget Category Dropdown (Hidden if only one budget) */}
                <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Budget Category</label>
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                        {budgets
                            .sort((a, b) => a.createAt - b.createAt)
                            .map((budget) => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Hidden Action Input */}
                <input type="hidden" name="_action" value="createExpense" />

                {/* Submit Button */}
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <span>Submitting...</span>
                    ) : (
                        <>
                            <span>Add Expense</span>
                            <PlusCircleIcon width={20} />
                        </>
                    )}
                </button>
            </fetcher.Form>
        </div>
    );
};

export default AddExpenseForm;
