import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data paylod", () => {
    const wrapper = mount(LoginForm);

    /*
    Note: When looking for the appropriate input, they recommend using the property data-testid in the input.
    That way, if a user changes some classnames, it won't break the tests. So it would be:
      data-testid="name-input" in the component, and then 
      wrapper.find('[data-testid="name-input"]') in the tests to find it
    */
    const input = wrapper.find('input[type="text"]');
    input.setValue("Colin McNamara");
    wrapper.trigger("submit"); // submit on form, not click on button

    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Colin McNamara" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
