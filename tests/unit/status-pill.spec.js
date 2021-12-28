import { mount } from "@vue/test-utils";
import StatusPill from "../../src/components/StatusPill.vue";

describe("StatusPill.vue", () => {
  it("renders props.status", () => {
    const status = "paid";
    const wrapper = mount(StatusPill, {
      props: {
        status,
      },
    });
    expect(wrapper.find("[data-testid='label']").html()).toContain(status);
  });

  it("applies props.status as paid", () => {
    const status = "paid";
    const wrapper = mount(StatusPill, {
      props: {
        status,
      },
    });
    const statusPillClassArray = wrapper.classes();

    expect(statusPillClassArray).toContain(status);
  });
});
